import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../../../Auth/AuthContext/AuthContext'
import { showSuccess } from '../../../Auth/generalComponents/HandlerError';
import showConfirmationDialog from '../../../Auth/generalComponents/sweetAlert';
import TabsLayout from './TabsLayout';
import * as Comp from './Index'


const TabsPage = () => {
  const {logout }= useAuth()
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('portada');
  

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const sessionCleaner = async()=>{
    const confirmed = await showConfirmationDialog(
      "¿Está seguro de cerrar sesión?"
    );
    if (confirmed) {
      // Si el usuario hace clic en "Aceptar", ejecutar la funcion:
      showSuccess("Sesión cerrada");
      navigate("/");
      setTimeout(() => {
        logout();
      }, 1000);
    }
  }

  return (
    <>
    <TabsLayout
      activeTab={activeTab}
      handleTabChange={handleTabChange}
      sessionCleaner={sessionCleaner}
    >
      {activeTab === 'portada' && (
        <Comp.LandingView/>
      )}
      {activeTab === 'work' && (
        <Comp.AdminAlbumWork/>
      )}
      {activeTab === 'about' && (
        <Comp.Producto/>
      )}
      {activeTab === 'imagenes' && (
        <Comp.ImagesComponent/>
      )}
      {activeTab === 'videos' && (
        <Comp.Videos/>
      )}
      {activeTab === 'config' && (
        <Comp.Config/>
      )}
    </TabsLayout>
    </>
  );
};

export default TabsPage;
