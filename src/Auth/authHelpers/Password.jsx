import axios from "axios";
import {HandlError,showSuccess, showError} from '../userComponents/HandlerError';
import setAuthHeader from '../userComponents/axiosUtils'


            const verifyPassword = async(userData, setVerify)=>{
              const id = userData.id;
              const password = userData.password;
              try {
                  const response = await axios.post(`/api/v1/user/update`,{
                      id,
                      password,
                  }, setAuthHeader());
                  if (response.status === 200) {
                    //console.log(response.data)
                    const user = response.data;
                      showSuccess('Verificacion exitosa')
                      //console.log(user)
                      setVerify(false)
                        return user;
                  }
                  } catch (error) {
                    showError('Verificacion fallida')
                    HandlError(error);
                    throw error;
                  }  
                  }
          
   const changePassword  = async (id, passChange,setVerify, onClose, logout) => {
     //Lógica para guardar los cambios (puedes conectarlo a tus acciones de Redux)
    try {
      // Realiza la solicitud PUT con Axios
        const response = await axios.put(`/api/v1/user/update/${id}`,passChange, setAuthHeader());
                          
      if (response.status === 200) {
        showSuccess('Usuario actualizado con éxito. Inicie sesion nuevamente')
        setVerify(true)
        onClose(); // Cierra el modal después de guardar los cambios
        setTimeout(()=>{
        logout()
        }, 5000)
        } else {
         showError('Error al actualizar el usuario')
         }
     } catch (error) {
       HandlError({error:error.message})
       console.error('Error al actualizar el usuario:', error);
     }
  };

  const onResetPass = async (id, onClose) => {
    try {//cambiar a post
      const response = await axios.post(`/api/v1/user/change`, {id}, setAuthHeader());
      if (response.status === 200) {
        showSuccess("Contraseña reiniciada con exito");
        onClose(); // Cierra el modal después de guardar los cambios
      } else if (response.status === 400) {
        showError("Error al actualizar la contraseña");
      }
    } catch (error) {
      if (error.response) {
        // Si hay una respuesta del servidor, muestra el mensaje de error correspondiente
        HandlError(error);
      } else {
        // Si no hay respuesta del servidor, muestra un mensaje de error genérico
        showError("Error al actualizar la contraseña");
      }
    }
  };

export {
    verifyPassword,
    changePassword,
    onResetPass
}