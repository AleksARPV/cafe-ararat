const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketGoods = sequelize.define('basket_goods', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Goods = sequelize.define('goods', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    weight: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    desc: {type: DataTypes.STRING}
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const GoodInfo = sequelize.define('good_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING, allowNull: false}
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketGoods)
BasketGoods.belongsTo(Basket)

Goods.hasMany(BasketGoods)
BasketGoods.belongsTo(Goods)

Type.hasMany(Goods)
Goods.belongsTo(Type)

Goods.hasMany(GoodInfo, {as: 'info'})
GoodInfo.belongsTo(Goods)

module.exports = {
    User,
    Basket,
    BasketGoods,
    Goods,
    GoodInfo,
    Type
}