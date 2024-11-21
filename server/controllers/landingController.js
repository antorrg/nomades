import sv from "../services/landingService.js";
import sm from "../services/mailerService.js"
import eh from "../utils/errorHandlers.js";

export default {
  createLandingController: eh.catchAsync(async (req, res) => {
    const { title, image, info_header, description } = req.body;
    const response = await sv.createLanding(
      title,
      image,
      info_header,
      description
    );
    res.status(201).json(response);
  }),
  updLandingController: eh.catchAsync(async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    const response = await sv.updLanding(id, newData);
    res.status(200).json(response);
  }),
  deleteLandingController: eh.catchAsync(async (req, res) => {
    const { id } = req.params;
    const response = await sv.delLanding(id);
    res.status(200).json(response);
  }),
  getLandingController: eh.catchAsync(async (req, res) => {
    const admin = req.admin;
    const response = await sv.getOneLanding(admin);
    res.status(200).json(response);
  }),
  detailLandingController: eh.catchAsync(async (req, res) => {
    const { id } = req.params;
    const response = await sv.getLandById(id);
    res.status(200).json(response);
  }),
  emailLandingController : eh.catchAsync(async(req, res)=>{//Controlador de envio de emails
    const {email, issue, message}=req.body;
    const response = await sm.senderMail(email, issue, message)
    res.status(200).json(response)
  })
};
