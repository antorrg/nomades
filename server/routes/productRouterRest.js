import express from 'express'
import ctr from '../controllers/productControllers.js'
import mdd from '../middlewares/middlewares.js'
import auth from '../middlewares/validation/index.js'


const productRouter = express.Router()

productRouter.post('/product/create', auth.verifyToken, auth.checkRole([0,2,9]), ctr.createController)
productRouter.put('/product/:id', auth.verifyToken, auth.checkRole([0,2,9]), ctr.updController)
productRouter.delete('/product/:id', auth.verifyToken, auth.checkRole([0,9]), ctr.delController)
productRouter.post('/product/item/create', auth.verifyToken, auth.checkRole([0,2,9]), ctr.createItemController)
productRouter.put('/product/item/:id', auth.verifyToken, auth.checkRole([0,2,9]), ctr.detailUpdController)
productRouter.delete('/product/item/:id', auth.verifyToken, auth.checkRole([0,2,9]), ctr.delItemController)
productRouter.get('/product', auth.setAdminVar, ctr.getProductHand)// Ruta libre, solo verifica
productRouter.get('/product/:id', auth.setAdminVar, ctr.getProductById)// Ruta libre, solo verifica
productRouter.get('/product/item/:id', auth.setAdminVar, ctr.getItemById)// Ruta libre, solo verifica
export default productRouter;