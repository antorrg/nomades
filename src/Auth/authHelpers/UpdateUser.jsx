import axios from "axios";
import {HandlError,showSuccess, showError} from '../userComponents/HandlerError';
import setAuthHeader from '../userComponents/axiosUtils'


export async function upgradeUser (userId, editedUser, onClose) {
  //console.log(userId)
    //cambiar rol y bloquear desbloquear usuario.
    try {
      // Realiza la solicitud PUT con Axios
      const response = await axios.put(
        `/api/v1/user/update/${userId}`,
        editedUser,
        setAuthHeader()
      );
      if (response.status === 200) {
        showSuccess(`Usuario actualizado con éxito`)
        await onClose(); // Cierra el modal después de guardar los cambios
      } else {
        showError("Error al actualizar el usuario");
      }
    } catch (error) {
      HandlError({ error: error.message });
      console.error("Error al actualizar el usuario:", error);
    }
  };
  export async function updateUser (userId, editedUser, onClose) {
    //console.log(userId)
      //Lógica para actualizar perfil de usuario
      try {
        // Realiza la solicitud PUT con Axios
        const response = await axios.put(
          `/api/v1/user/updprofile//${userId}`,
          editedUser,
          setAuthHeader()
        );
        if (response.status === 200) {
          showSuccess(`Usuario actualizado con éxito`)
          await onClose(); // Cierra el modal después de guardar los cambios
        } else {
          showError("Error al actualizar el usuario");
        }
      } catch (error) {
        HandlError({ error: error.message });
        console.error("Error al actualizar el usuario:", error);
      }
    };

