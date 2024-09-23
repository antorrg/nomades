//import {useSelector}from 'react-redux';

const ValidLogin = (input) => {
  let errors = {};

  // Using Regular Expressions to validate the appropriate use
  const validEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  const validPass = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  
  
  // Validaciones para el campo de email
  if (!input.email.trim()) {
    errors.email = "Este campo no puede estar vacio";
  } else if (!validEmail.test(input.email.trim())) {
    errors.email = "Formato de email invalido";
  } else if (input.email.length >= 50) {
    errors.email = "El email es muy largo";
  }

  // Validaciones para el campo de contraseña
  if (!input.password.trim()) {
    errors.password = "Este campo no puede estar vacio";
  } else if (!validPass.test(input.password.trim())) {
    errors.password = "La contrasena debe contener al menos una mayuscula y un numero";
  } else if (input.password.length < 8) {
    errors.password = "La contrasena debe tener al menos 8 caracteres";
  }

  return errors;
};

const ValidCreate = (input) => {
  //   const allUsers = useSelector((state) => state.allUsers)
  //  const all = allUsers.data
  //  console.log(all)
    let errors = {};
  
    // Using Regular Expressions to validate the appropriate use
    const validEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const validPass = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
   //const avoidRepetition = all.filter((email) => email.email === input.email);
    
    // Validaciones para el campo de email
    if (!input.email.trim()) {
      errors.email = "Este campo no puede estar vacio";
    // } else if (avoidRepetition.length !== 0) {
    //   errors.email = "Please choose another email, it already exists";
    } else if (!validEmail.test(input.email.trim())) {
      errors.email = "Formato de email invalido";
    } else if (input.email.length >= 50) {
      errors.email = "El email es muy largo";
    }
    // Validaciones para el campo de contraseña
    if (!input.password.trim()) {
      errors.password = "Este campo no puede estar vacio";
    } else if (!validPass.test(input.password.trim())) {
      errors.password = "La contrasena debe contener al menos una mayuscula y un numero";
    } else if (input.password.length < 8) {
      errors.password = "La contrasena debe tener al menos 8 caracteres";
    } else if (input.password !== input.confirmPassword) {
      errors.confirmPassword = "Las contrasenas no coinciden";
    }
    
  
    return errors;
  };

const ValidPass = (input)=>{
    let errors = {};

    const validatePassword = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
   
    // Validaciones para el campo de contraseña
    if (!input.newPassword.trim()) {
      errors.newPassword = "Este campo no puede estar vacio";
    } else if (!validatePassword.test(input.newPassword.trim())) {
      errors.newPassword = "La contrasena debe contener al menos una mayuscula y un numero";
    } else if (input.newPassword.length < 8) {
      errors.newPassword = "La contrasena debe tener mas de 8 letras";
    } else if (input.newPassword !== input.confirmPassword) {
      errors.confirmPassword = "Las contrasenas no coinciden";
    }
    return errors;
}

export {
  ValidLogin,
  ValidCreate,
  ValidPass
}; 
