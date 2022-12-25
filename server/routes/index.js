const Router = require('express')
const router = new Router()
const goodsRouter = require('./goodsRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')


router.use('/user', userRouter)
router.use('/goods', goodsRouter)
router.use('/type', typeRouter)


module.exports = router