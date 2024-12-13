import work from '../services/ourWork.js'
import eh from '../utils/errorHandlers.js'


export default {
    workCreate : eh.catchAsync(async(req, res)=>{
        const newData = req.body;
        const response = await work.createWork(newData)
        res.status(201).json(response)
    }),
    workGet  : eh.catchAsync(async(req, res)=>{
        const admin = req.admin;
        const response = await work.getWork(admin)
        res.status(200).json(response)
    }),
    workById : eh.catchAsync(async(req, res)=>{
        const {id}= req.params;
        const response = await work.workById(id)
        res.status(200).json(response)
    }),
    workUpd : eh.catchAsync(async(req, res)=>{
        const {id}= req.params;
        const newData = req.body;
        const response = await work.updWork(id, newData)
        res.status(200).json(response)
    }),
    workDelete : eh.catchAsync(async(req, res)=>{
        const {id} = req.params;
        const response = await work.delWork(id)
        res.status(200).json(response)
    }),
    
}