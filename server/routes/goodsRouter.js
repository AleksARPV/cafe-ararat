const Router = require('express')
const router = new Router()
const goodsController = require('../controllers/goodsController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/', checkRoleMiddleware('ADMIN'), goodsController.create)
router.get('/', goodsController.getAll)
router.get('/:id', goodsController.getById)
router.delete('/:id', checkRoleMiddleware('ADMIN'), goodsController.remove)


module.exports = router