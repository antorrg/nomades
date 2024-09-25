import React, { useState } from 'react';
import './styles/admin.css'
import { useAuth } from '../Auth/AuthContext/AuthContext';
import { showSuccess } from '../Auth/userComponents/HandlerError';
import { useNavigate } from 'react-router-dom';
import Edition from '../Auth/userComponents/Edition/Edition'
import * as Main from './AdminViews/AdminIndex';


const Admin = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [help, setHelp] = useState(false);
  const [show1, setShow1] = useState(false);
  //console.log('user: ', user)



  return (
    <>
     <div >
     <Main.AdminNav setHelp={setHelp}/>
     {/* <Main.ProductComp/> */}
     <Main.WelcomeView/>
      </div>
    </>
  );
};

export default Admin;



