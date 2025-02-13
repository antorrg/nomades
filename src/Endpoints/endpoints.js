import BaseEndpoint from './BaseEndpoints';

//* Info 
// get(endpoint, params = {}, auxFunction = null, admin = false) 
//post(endpoint, data = {}, auxFunction = null, admin = false, rejectfunction, message)
//put(endpoint, data = {}, auxFunction = null, admin = false, rejectfunction, message)
//delete(endpoint, auxFunction = null, admin = false, rejectfunction, message)
/**
 * data y tipos 
 * Post 
 */
//(endpoint, data = {}, auxFunction = null, admin = false, rejectFunction = null, message= 'Operación exitosa'
const userLogin = new BaseEndpoint('/api/v1/user', false)
export const loginUser = (data, aux, auxReject)=> userLogin.post('login', data, aux, false, auxReject, '¡Verificación exitosa. Bienvenido!')

export const userValid = new BaseEndpoint('/api/v1/user', true)//* Para las tareas de edición usar esta instancia.

//todo  Endpoints Landing:

const landingAdmin = new BaseEndpoint('/api/v1/land', true)

export const landingCreate = (data, aux, auxReject)=> landingAdmin.post('create', data, aux, true, auxReject, 'Portada creada exitosamente')

export const landingGet = ()=> landingAdmin.get('', null, null, true)

export const landingGetById = (id)=> landingAdmin.get(`${id}`, null, null, true )

export const landingUpdate = (id, data, aux, auxReject)=> landingAdmin.put(`${id}`, data, aux, true, auxReject, 'Portada actualizada exitosamente')

export const landingDelete = (id, aux, auxReject)=> landingAdmin.delete(`/${id}`,aux, true, auxReject)

//todo Endpoints Product:

const productAdmin = new BaseEndpoint('/api/v1/product', true)

export const productGet = ()=> productAdmin.get('', null, null, true)

export const productGetById = (id)=> productAdmin.get(`${id}`, null, null, true)

export const createProduct = (data, aux, auxReject)=> productAdmin.post('create', data, aux, true, auxReject, 'Product create successfully')

export const updateProduct = (id, data, aux, auxReject)=> productAdmin.put(`${id}`, data, aux, true, auxReject)

export const deleteProduct = (id, aux, auxReject)=> productAdmin.delete(`${id}`,aux, true, auxReject)

//todo Endpoints Item

const itemAdmin = new BaseEndpoint('/api/v1/item', true)

export const createItem = (data, aux, auxReject)=> itemAdmin.post('create', data, aux, true, auxReject, 'Item creado exitosamente')

export const getItemById = (id)=> itemAdmin.get(`${id}`, null, null, true)

export const updateItem = (id, data, aux, auxReject)=> itemAdmin.put(`${id}`, data, aux, true, auxReject, 'Item actualizado exitosamente')

export const deleteItem = (id, aux, auxReject) => itemAdmin.delete(`${id}`,aux, true, auxReject)


//todo Endpoints User:

export const userGet = ()=> userValid.get('', null, null, true)

export const userGetbyid = (id, auxReject)=> userValid.get(`${id}`, null, null, true, auxReject)

export const userVerify = (data, aux, auxReject)=> userValid.post('verify',data, aux, true, auxReject )

export const userChangePass = (id, data, aux, auxReject)=> userValid.put(`update/${id}`, data, aux, true, auxReject)

export const userProfile = (id, data, aux, auxReject)=> userValid.put(`profile/${id}`, data, aux, true, auxReject)

export const userUpgrade = (id, data, aux, auxReject)=> userValid.put(`upgrade/${id}`, data, aux, true, auxReject)

export const userResetPass = (id, data, aux, auxReject)=> userValid.put(`reset/${id}`, data, aux, true, auxReject)

export const userCreate = (data, aux, auxReject)=> userValid.post('create',data, aux, true, auxReject )

export const userDelete = (id, aux, auxReject)=> userValid.delete(`${id}`,aux, true, auxReject)

