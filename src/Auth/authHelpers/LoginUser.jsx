import axios from "axios";
import {HandlError,showSuccess, showError} from '../userComponents/HandlerError';
import setAuthHeader from '../userComponents/axiosUtils'


export default async function loginUser (userData,login, succesLogin) {
    const email = userData.email;
    const password = userData.password;
    try {
        const response = await axios.post(`/api/v1/user/login`,{
            email,
            password,
        });
        if (response.status === 200) {
          console.log(response.data.data)
          const token = response.data.token;
          const user = response.data.user;
          login(user, token);
          succesLogin()
          //console.log(token)
          //console.log("Token almacenado en localStorage:", localStorage.getItem('validToken'));
            showSuccess('¡Verificacion exitosa!')
            //console.log('token:',token)
            //console.log('user: ',user)
           return user;
        }
        } catch (error) {
          showError('Verificacion fallida')
          HandlError(error);
          throw error;
        }
     }  
