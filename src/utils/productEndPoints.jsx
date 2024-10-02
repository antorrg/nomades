import axios from 'axios'
import { HandlError,showSuccess, showError  } from '../Auth/userComponents/HandlerError'
import setAuthHeader from '../Auth/userComponents/axiosUtils'


export const updateProduct = async(id,product, onClose)=>{
    console.log(id)
    try {
        const response = await axios.put(`/api/v1/product/${id}`, 
            product, setAuthHeader()
        )
        if (response.status === 200){
            showSuccess('Producto actualizado correctamente')
            await onClose(); // Cierra el modal después de guardar los cambios
        }
    } catch (error) {
        HandlError(error);
  console.error("Error al actualizar el producto:", error);
    }
}

export const updateItem = async(id,item, onClose)=>{
    console.log(id)
    try {
        const response = await axios.put(`/api/v1/product/item/${id}`, 
            item, setAuthHeader()
        )
        if (response.status === 200){
            showSuccess('Item actualizado correctamente')
            await onClose(); // Cierra el modal después de guardar los cambios
        }
    } catch (error) {
        HandlError({ error: error.message });
  console.error("Error al actualizar el item:", error);
    }
}
export const createProduct = async(product, onClose)=>{
   
    try {
        const response = await axios.post(`/api/v1/product/create`, 
            product, setAuthHeader()
        )
        if (response.status === 201){
            showSuccess('Producto creado correctamente')
            await onClose(); // Cierra el modal después de guardar los cambios
        }
    } catch (error) {
        HandlError(error);
  //console.error("Error al crear el producto:", error);
    }
}

export const createItem = async(item, onClose)=>{
   
    try {
        const response = await axios.post(`/api/v1/product/item/create`, 
            item, setAuthHeader()
        )
        if (response.status === 201){
            showSuccess('Item creado correctamente')
            await onClose(); // Cierra el modal después de guardar los cambios
        }
    } catch (error) {
        HandlError({ error: error.message });
  console.error("Error al crear el item:", error);
    }
}