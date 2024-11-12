import React, { useState } from 'react';
import TabsLayout from './TabsLayout';
import * as Comp from './TabsComponents/Index'


const TabsPage = () => {
  const [activeTab, setActiveTab] = useState('producto');
  

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
      {activeTab === 'producto' && (
        <Comp.Producto/>
      )}
      {activeTab === 'user' && (
        <Comp.User/>
      )}
      {activeTab === 'portada' && (
        <Comp.Portada/>
      )}
      {activeTab === 'imagenes' && (
        <Comp.Imagenes/>
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
