import eh from "../utils/errorHandlers.js";
import * as imgs from "../services/storage.js";
import serv from "../services/mediaServices.js"

export default {
  getImagesController: eh.catchAsync(async (req, res) => {//Images
    const response = await imgs.getImages();
    res.status(200).json(response);
  }),
  deleteImagesController: eh.catchAsync(async (req, res) => {//Images
    const { id } = req.params;
    const response = await imgs.deleteImage(id, true);
    res.status(200).json(response);
  }),
  createMediaController: eh.catchAsync(async (req, res)=>{
    const newData = req.body;
    const response = await serv.createMedia(newData)
    res.status(201).json(response)
  }),
  getMediaController: eh.catchAsync(async (req, res)=>{
    const isAdmin = false;
    const response = await serv.getMedia(isAdmin)
    res.status(200).json(response)
  }),
  getAdminMediaController: eh.catchAsync(async (req, res)=>{
    const isAdmin = true;
    const response = await serv.getMedia(isAdmin)
    res.status(200).json(response)
  }),
  getByIdMediaController: eh.catchAsync(async (req, res)=>{
    const {id}=req.params;
    const response = await serv.getMediaById(id)
    res.status(200).json(response)
  }),
  updateMediaController: eh.catchAsync(async (req, res)=>{
      const {id}= req.params;
      const newData = req.body;
      const response = await serv.updateMedia(id, newData)
      res.status(200).json(response)
  }),
  deleteMediaController: eh.catchAsync(async (req, res)=>{
    const {id} = req.params;
    const response = await serv.deleteMedia(id)
      res.status(200).json(response)
  }),
};
