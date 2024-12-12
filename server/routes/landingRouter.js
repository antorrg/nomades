import express from 'express'
import ctr from '../controllers/landingController.js'
import mdd from '../middlewares/middlewares.js'
import auth from '../middlewares/validation/index.js'

const landingRouter = express.Router()

landingRouter.post('/land', auth.verifyToken, mdd.landingCreate, ctr.createLandingController)

landingRouter.post("/land/emails", ctr.emailLandingController); //Ruta de subida de imagenes

landingRouter.put('/land/:id', auth.verifyToken, mdd.landingUpdate, ctr.updLandingController)

landingRouter.delete('/land/:id', auth.verifyToken, ctr.deleteLandingController)

landingRouter.get('/land', auth.setAdminVar, ctr.getLandingController)//Ruta libre, solo verifica

landingRouter.get('/land/:id', auth.verifyToken, ctr.detailLandingController)

export default landingRouter;