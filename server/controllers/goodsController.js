const uuid = require('uuid')
const path = require('path')
const {Goods, GoodInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
const {where} = require("sequelize");
const db = require('../db')

class GoodsController {
    async create(req, res, next) {
        try {
            let {name, price, weight, typeId, desc, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".png"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const good = await Goods.create({name, price, weight, typeId, img: fileName, desc})

            if (info) {
                info = JSON.parse(info)
                info.forEach(i => GoodInfo.create({
                    description: i.description,
                    goodId: good.id
                }))
            }
            return res.json(good)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async remove(req, res) {
        const id = req.params.id
        const good = await db.query(`DELETE FROM goods where id = ${id}`)
        const goods = await Goods.findAll()
        res.json(goods)
    }

    async getAll(req, res) {
        let {typeId} = req.query
        let goods
        if (!typeId) {
            goods = await Goods.findAndCountAll()
        }
        if (typeId) {
            goods = await Goods.findAndCountAll({where: {typeId}})
        }
        return res.json(goods)
    }

    async getById(req, res) {
        const {id} = req.params
        const good = await Goods.findOne(
            {
                where: {id},
                include: [{model: GoodInfo, as: 'info'}]
            }
        )
        return res.json(good)
    }
}

module.exports = new GoodsController()