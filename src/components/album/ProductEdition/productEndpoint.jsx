import axios from 'axios'
import { HandlError,showSuccess, showError  } from '../../../Auth/userComponents/HandlerError'
import setAuthHeader from '../../../Auth/userComponents/axiosUtils'


 const updateProduct = async(id,product, onClose)=>{
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
        HandlError({ error: error.message });
  console.error("Error al actualizar el usuario:", error);
    }
}
export default updateProduct