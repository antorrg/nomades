import React, { useState } from 'react';
import TabsLayout from './TabsLayout';
import * as Comp from './Index'


const TabsPage = () => {
  const [activeTab, setActiveTab] = useState('portada');
  

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const sessionCleaner = () => {
    console.log('Cerrando sesión...');
    alert('¡Le erraste loco...!')
  };

  return (
    <>
    <TabsLayout
      activeTab={activeTab}
      handleTabChange={handleTabChange}
      sessionCleaner={sessionCleaner}
    >
      {activeTab === 'portada' && (
        <Comp.Portada/>
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
