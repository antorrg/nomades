import env from '../envConfig.js'
import eh from '../utils/errorHandlers.js'
import { validate as uuidValidate, version as uuidVersion } from 'uuid';
//import { body, query,validationResult } from 'express-validator';

export default {
    createUser : async (req, res, next)=>{
        const{email}= req.body;
        // Validar si existe el email y su formato usando una expresión regular
        if(!email){eh.throwError('Falta el email', 400)};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {eh.throwError('Formato de email invalido', 400)}
        next()
},
loginUser : async (req, res, next)=>{
        const{email, password}= req.body;
        // Validar si existe el email y su formato usando una expresión regular
        if(!email){eh.throwError('Falta el email', 400)};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {eh.throwError('Formato de email invalido', 400)}
        if(!password){eh.throwError('Falta la contraseña!', 400)};
        const passwordRegex = /^(?=.*[A-Z]).{8,}$/; // Al menos 8 caracteres y una letra mayúscula
        if (!passwordRegex.test(password)) {eh.throwError('Contraseña invalida. Esta debe tener al menos 8 caracteres y una mayuscula',400)}
        next()
},

updUserMidd : (req, res, next) => {
    
    const { id } = req.params; const newData = req.body;
    // Validar que el ID esté presente
    if (!id) {eh.throwError('Falta el id', 400)}
    // Validar que el ID sea un UUID v4 válido
    if (!uuidValidate(id) || uuidVersion(id) !== 4) {eh.throwError('Id invalido!', 400)}
    // Validar que el cuerpo de la solicitud esté presente y no vacío
    if (!newData || Object.keys(newData).length === 0) {eh.throwError('Faltan elementos!!', 400)}

    // Puedes agregar validaciones adicionales para los campos esperados en newData
    const requiredFields = ['email', 'given_name', 'picture', 'country',];
    const missingFields = requiredFields.filter(field => !(field in newData));
    if (missingFields.length > 0) {eh.throwError(`Parametros faltantes: ${missingFields.join(', ')}`, 400)}
    next();
},
userVerifyPassMidd : (req, res, next) => {
    const { id , password}= req.body
    const {userId}=req.userInfo
    // Validar que el ID esté presente
    if (!id) {eh.throwError('Falta el id', 400)}
    // Validar que el ID sea un UUID v4 válido
    if (!uuidValidate(id) || uuidVersion(id) !== 4) {eh.throwError('Id invalido!', 400)}
    //Validar que el id y el userId (token) sean iguales.
    if(id !== userId){eh.throwError('Solo el propietario de la cuenta puede cambiar la contraseña!!',400)}
    if(!password){eh.throwError('Falta la contraseña!', 400)};
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/; // Al menos 8 caracteres y una letra mayúscula
    if (!passwordRegex.test(password)) {eh.throwError('Contraseña invalida. Esta debe tener al menos 8 caracteres y una mayuscula',400)}
    next();
},
userChangePassMidd : (req, res, next) => {
    const { id } = req.params; 
    const {password}= req.body
    const {userId}=req.userInfo
    // Validar que el ID esté presente
    if (!id) {eh.throwError('Falta el id', 400)}
    // Validar que el ID sea un UUID v4 válido
    if (!uuidValidate(id) || uuidVersion(id) !== 4) {eh.throwError('Id invalido!', 400)}
    //Validar que el id y el userId (token) sean iguales.
    if(id !== userId){eh.throwError('Solo el propietario de la cuenta puede cambiar la contraseña!!',400)}
    if(!password){eh.throwError('Falta la contraseña!', 400)};
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/; // Al menos 8 caracteres y una letra mayúscula
    if (!passwordRegex.test(password)) {eh.throwError('Contraseña invalida. Esta debe tener al menos 8 caracteres y una mayuscula',400)}
    next();
},

userResetPassMidd : (req, res, next) => {
    const { id } = req.body;
    // Validar que el ID esté presente
    if (!id) {eh.throwError('Falta el id', 400)}
    // Validar que el ID sea un UUID v4 válido
    if (!uuidValidate(id) || uuidVersion(id) !== 4) {eh.throwError('Id invalido!', 400)}
    next();
},
upgradeUserMidd : (req, res, next) => {
    const { id } = req.params; const newData = req.body;
    // Validar que el ID esté presente
    if (!id) {eh.throwError('Falta el id', 400)}
    // Validar que el ID sea un UUID v4 válido
    if (!uuidValidate(id) || uuidVersion(id) !== 4) {eh.throwError('Id invalido!', 400)}
    // Validar que el cuerpo de la solicitud esté presente y no vacío
    if (!newData || Object.keys(newData).length === 0) {eh.throwError('Faltan elementos!!', 400)}

    // Puedes agregar validaciones adicionales para los campos esperados en newData
    const requiredFields = ['role', 'enable'];
    const missingFields = requiredFields.filter(field => !(field in newData));
    if (missingFields.length > 0) {eh.throwError(`Parametros faltantes: ${missingFields.join(', ')}`, 400)}
    next();
},
createItem : (req, res, next) => {
    const newData = req.body;
    if (!newData || Object.keys(newData).length === 0) {eh.throwError('Faltan elementos!!', 400)}

    const requiredFields = ['img', 'text', 'id', 'useImg'];
    const missingFields = requiredFields.filter(field => !(field in newData));
    if (missingFields.length > 0) {eh.throwError(`Parametros faltantes: ${missingFields.join(', ')}`, 400)}
    next();
    },
updateItem : (req, res, next) => {
        const {id} = req.params; const newData = req.body;

        const idIsNumber = !isNaN(id) && Number.isInteger(parseFloat(id));
        if (!id) {eh.throwError('Falta el id',400)}
        if (id && !idIsNumber) {eh.throwError('Parametros no permitidos', 400)}
        if (!newData || Object.keys(newData).length === 0) {eh.throwError('Faltan elementos!!', 400)}
    
        const requiredFields = ['img', 'text', 'id', 'saver', 'useImg'];
        const missingFields = requiredFields.filter(field => !(field in newData));
        if (missingFields.length > 0) {eh.throwError(`Parametros faltantes: ${missingFields.join(', ')}`, 400)}
        next();
        },

createProduct: (req, res, next) => {
        const newData = req.body;
        if (!newData || Object.keys(newData).length === 0) {eh.throwError('Faltan elementos!!', 400)}
        // Validar los campos requeridos en newData
        const requiredFields = ['title', 'landing', 'info_header', 'info_body',];
        const missingFields = requiredFields.filter(field => !(field in newData));
        if (missingFields.length > 0) {
             eh.throwError(`Parametros faltantes: ${missingFields.join(', ')}`, 400);
        }
    
        // Validar los items
        let items = newData.items;
        if (!items || items.length === 0) {
          eh.throwError('Faltan items!!', 400);
        }
    
        const itemFields = ['img', 'text'];
    
        // Iterar los items y lanzar el error en cuanto se detecta un campo faltante
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const missingItemFields = itemFields.filter(field => !(field in item));
    
            if (missingItemFields.length > 0) { eh.throwError(`Parametros faltantes en item ${i + 1}: ${missingItemFields.join(', ')}`, 400);
            }
        }
    
        next();
    },
    
updProduct: (req, res, next)=>{
    const {id}= req.params;  const newData = req.body;
    const idIsNumber = !isNaN(id) && Number.isInteger(parseFloat(id));
    if (!id) {eh.throwError('Falta el id',400)}
    if (id && !idIsNumber) {eh.throwError('Parametros no permitidos', 400)}

    if (!newData || Object.keys(newData).length === 0) {eh.throwError('Faltan elementos!!', 400)}
    const requiredFields = ['title', 'landing', 'info_header', 'info_body', 'saver', 'useImg'];
    const missingFields = requiredFields.filter(field => !(field in newData));
    if (missingFields.length > 0) {eh.throwError(`Parametros faltantes: ${missingFields.join(', ')}`, 400)}

    next();
},
landingCreate : eh.catchAsync((req, res, next)=>{
    const newData = req.body;

    if (!newData || Object.keys(newData).length === 0) {eh.throwError('Faltan elementos!!', 400)}
    const requiredFields = ['title', 'image', 'info_header', 'description', 'useImg'];
    const missingFields = requiredFields.filter(field => !(field in newData));
    if (missingFields.length > 0) {eh.throwError(`Parametros faltantes: ${missingFields.join(', ')}`, 400)}

    next();
}),
landingUpdate : (req, res, next)=>{
    const { id } = req.params; const newData = req.body;

    const idIsNumber = !isNaN(id) && Number.isInteger(parseFloat(id));
    if (!id) {eh.throwError('Falta el id',400)}
    if (id && !idIsNumber) {eh.throwError('Parametros no permitidos', 400)}

    if (!newData || Object.keys(newData).length === 0) {eh.throwError('Faltan elementos!!', 400)}
    const requiredFields = ['title', 'image', 'info_header', 'description', 'saver', 'useImg'];
    const missingFields = requiredFields.filter(field => !(field in newData));
    if (missingFields.length > 0) {eh.throwError(`Parametros faltantes: ${missingFields.join(', ')}`, 400)}

    next();
},
aboutWorkCreate : (req, res, next)=>{
    const newData = req.body;
    if (!newData || Object.keys(newData).length === 0) {eh.throwError('Faltan elementos!!', 400)}
    const requiredFields = ['title', 'image', 'text', 'useImg'];
    const missingFields = requiredFields.filter(field => !(field in newData));
    if (missingFields.length > 0) {eh.throwError(`Parametros faltantes: ${missingFields.join(', ')}`, 400)}

    next();
},
aboutWorkUpd : (req, res, next)=>{
    const newData = req.body;
    if (!newData || Object.keys(newData).length === 0) {eh.throwError('Faltan elementos!!', 400)}
    const requiredFields = ['title', 'image', 'text', 'enable', 'saver', 'useImg'];
    const missingFields = requiredFields.filter(field => !(field in newData));
    if (missingFields.length > 0) {eh.throwError(`Parametros faltantes: ${missingFields.join(', ')}`, 400)}

    next();
},
middUuid: (req, res, next) => {
    const { id } = req.params;
    if (!id) {eh.throwError('Falta el id',400)}
    if (!uuidValidate(id)) {eh.throwError('Parametros no permitidos', 400)}
    next();
    },

middIntId : (req, res, next) => {
        const {id} = req.params;
        const idIsNumber = !isNaN(id) && Number.isInteger(parseFloat(id));
        if (!id) {eh.throwError('Falta el id',400)}
        if (id && !idIsNumber) {eh.throwError('Parametros no permitidos', 400)}
        next()
    },
}