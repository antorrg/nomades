import BaseEndpoints from "./mainFunctions/BaseEndpoints";

//* Info
//todo endpointXX = new BaseEndpoint(urlBase, admin = false)( cuando no es admin no añade el token de autorización)
// get(endpoint, params = {}, auxFunction = null,)
// Estas funciones pertenecen solo a las rutas publicas

const publicLanding = new BaseEndpoints("/api/v1/land", false);
const publicProduct = new BaseEndpoints("/api/v1/product", false);
const publicMedia = new BaseEndpoints("/api/v1/media/videos", false);///api/v1/media/admin/videos
const publicWork = new BaseEndpoints("/api/v1/work", false);


export const pbLanding = () => publicLanding.get("", null, null, );

export const sendEmails= (data, auxFunction, rejectFunction) => publicLanding.post('emails', data, auxFunction, rejectFunction, "Email enviado correctamente")

export const pbProduct = () => publicProduct.get("", null, null)

export const pbProductId = (id) => publicProduct.get(`${id}`, null, null)

export const pbItem = (id) => publicProduct.get(`item/${id}`, null, null)

export const pbMedia = () => publicMedia.get('', null, null)

export const pbWorks = () => publicWork.get('', null, null)
