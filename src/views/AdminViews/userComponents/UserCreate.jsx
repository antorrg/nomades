import {useEffect, useState} from 'react'
import showConfirmationDialog from '../../../Auth/userComponents/sweetAlert'
import { ValidCreate } from '../../../Auth/userComponents/internalUtils/Validate';

const UserCreate = () => {
    const [input, setInput] = useState({
        email: ""
      });
    
      const [error, setError] = useState({
        email: ""
      });
    
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setInput((prevInput) => ({
          ...prevInput,
          [name]: value,
        }));
    
        setError({
          ...error,
          [name]: ValidCreate({ ...input, [name]: value })[name],
        });
      };
      const handleSubmit = async() => {
              // Lógica para crear el usuario
              const confirmed = await showConfirmationDialog(
                    "¿Está seguro de crear este usuario?"
                  );
                  if (confirmed) {
                    // Si el usuario hace clic en "Aceptar", ejecutar la funcion:
                    console.log(input)
                    //await updateItem( id, user, onClose)
                  }
              
            };
            const permit =
            !input.email.trim() ||
            error.email;
  return (
      <div className="imageBack">
       <div className="coverBack">
         <div className="container-md modal-content colorBack formProductContainer rounded-4 shadow">
           <div className="container mt-5">
             <h1>Creacion de usuario:</h1>
             <section className="needs-validation" id="updateItemForm" noValidate>
               <div className="row">
                 <div className="col-md-6 mb-3"></div>
                 <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input className="form-control mb-3" type="email" id="email" name="email" autoComplete='on' value={input.email} onChange={handleChange}/>
                {error.email && <p className='errorMsg'>{error.email}</p>}
                 </div>
                 <button className="btn btn-primary w-100 py-2 mb-3" onClick={handleSubmit} disabled={permit}>Crear</button>
             </section>
            </div>
        </div>
    </div>
  </div>
  )
}

export default UserCreate
