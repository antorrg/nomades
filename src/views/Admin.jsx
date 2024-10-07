import React, { useState } from "react";
import "./styles/admin.css";
import * as Main from "./AdminViews/AdminIndex";
import {useAuth} from '../Auth/AuthContext/AuthContext'
import SessionWarning from "../Auth/AuthContext/SessionWarning";

const Admin = () => {
  const {expirationTime}= useAuth()
  const [help, setHelp] = useState(false);
  //console.log('user: ', user)

  return (
    <>
      <div>
        <Main.AdminNav setHelp={setHelp} />
        {/* <Main.ProductComp/> */}
        <SessionWarning expirationTime={expirationTime}/>
        <Main.WelcomeView />
      </div>
    </>
  );
};

export default Admin;
