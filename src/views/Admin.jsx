import React, { useState } from "react";
import "./styles/admin.css";
import * as Main from "./AdminViews/AdminIndex";

const Admin = () => {
  const [help, setHelp] = useState(false);
  //console.log('user: ', user)

  return (
    <>
      <div>
        <Main.AdminNav setHelp={setHelp} />
        {/* <Main.ProductComp/> */}
        <Main.WelcomeView />
      </div>
    </>
  );
};

export default Admin;
