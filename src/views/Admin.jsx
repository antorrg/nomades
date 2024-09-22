import React, { useState } from 'react';
import './styles/admin.css'
import { useAuth } from '../Auth/AuthContext/AuthContext';
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import { showSuccess } from '../Auth/userComponents/HandlerError';
import { useNavigate } from 'react-router-dom';
import Edition from '../Auth/userComponents/Edition/Edition'
import * as Main from './AdminViews/AdminIndex';

const Admin = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [show1, setShow1] = useState(false);
  //console.log('user: ', user)

  const sessionCleaner = () => {
    showSuccess('Sesión cerrada');
    navigate('/');
    setTimeout(() => {
      logout();
    }, 1500);
  };

  return (
    <>
     <div >
     <nav className="navbar navbar-dark bg-dark" aria-label="Dark offcanvas navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Administrador</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasNavbarDark" aria-labelledby="offcanvasNavbarDarkLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">Administrador</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body admin-content">
              <ul className="navbar-nav justify-content-start flex-grow-1 ps-3">
                <li className="nav-item">
                  <button className="nav-link active"  onClick={()=>{console.log('soy el producto')}}>Producto</button>
                </li>
                <li className="nav-item">
                <Edition allowedRoles={['Super Admin', 'Admin']} onClick={()=>{console.log('aca toy')}} text={'Usuarios'} className='nav-link active' />
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            <hr/>
           <div className="dropdown">
              <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={user.picture} alt="Not found" width="32" height="32" className="rounded-circle me-2"/> 
                <strong>{user.given_name?user.geiven_name:user.nickname}</strong>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
               <li><button className="dropdown-item" onClick={()=>{console.log('nuevo proyecto')}}>Nuevo proyecto...</button></li>
                <li><button className="dropdown-item" onClick={()=>{console.log('configuracion')}}>Settings</button></li>
                <li><button className="dropdown-item" onClick={()=>{console.log('soy el perfil')}}>Perfil</button></li>
                <li><hr className="dropdown-divider"/></li>
                <li><button className="dropdown-item" onClick={() => sessionCleaner()}>Cerrar sesion</button></li>
              </ul>
           </div>
           </div>
          </div>
        </div>
      </nav>
      <Main.ProductComp/>

      </div>
    </>
  );
};

export default Admin;
// import React, { useState } from 'react';
// import { useAuth } from '../Auth/AuthContext/AuthContext';
// import { Navbar, Nav, Button, Collapse, Dropdown } from 'react-bootstrap';
// import { showSuccess } from '../Auth/userComponents/HandlerError';
// import { useNavigate } from 'react-router-dom';
// import * as Main from './AdminViews/AdminIndex';

// const Admin = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [show1, setShow1] = useState(false);

//   const sessionCleaner = () => {
//     showSuccess('Sesión cerrada');
//     navigate('/');
//     setTimeout(() => {
//       logout();
//     }, 1500);
//   };

//   return (
//     <div className="admin-layout">
//       {/* Navbar para todos los tamaños de pantalla */}
//       <Navbar bg="dark" variant="dark" expand="lg" className="admin-navbar">
//         <div className="container-fluid">
//           <Navbar.Brand href="/">Administrador</Navbar.Brand>
//           <Button
//             variant="outline-light"
//             className="d-lg-none"
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             aria-controls="sidebarMenu"
//             aria-expanded={sidebarOpen}
//           >
//             <span className="navbar-toggler-icon" />
//           </Button>
//         </div>
//       </Navbar>

//       <div className="admin-content">
//         {/* Sidebar */}
//         <Collapse in={!sidebarOpen} className="d-lg-block">
//           <div id="sidebarMenu" className="sidebar bg-dark text-white">
//             <Nav className="flex-column">
//               <Nav.Link onClick={() => setShow1(true)} className="nav-link text-white">
//                 Productos
//               </Nav.Link>
//               <Nav.Link href="/admin/users" className="nav-link text-white">
//                 Usuarios
//               </Nav.Link>
//               <Nav.Link href="#" className="nav-link text-white">
//                 Items
//               </Nav.Link>
//               <Nav.Link href="#" className="nav-link text-white">
//                 Configuraciones
//               </Nav.Link>
//               <Nav.Link href="#" className="nav-link text-white">
//                 Nuevo proyecto
//               </Nav.Link>
//             </Nav>
//             <hr />
//             <Dropdown>
//               <Dropdown.Toggle variant="dark" id="dropdown-basic" className="d-flex align-items-center text-white">
//                 <img src={user.image} alt="Not found" width="32" height="32" className="rounded-circle me-2" />
//                 <strong>{user.nickname}</strong>
//               </Dropdown.Toggle>
//               <Dropdown.Menu variant="dark" className="text-small shadow">
//                 <Dropdown.Item href="/admin/project/">Nuevo proyecto...</Dropdown.Item>
//                 <Dropdown.Item href="/admin/page/1">Settings</Dropdown.Item>
//                 <Dropdown.Item href="#">Perfil</Dropdown.Item>
//                 <Dropdown.Divider />
//                 <Dropdown.Item onClick={() => sessionCleaner()}>Cerrar Sesión</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </div>
//         </Collapse>
//         </div>

//         {/* Área de Contenido Principal */}
//         <div className="main-content">
//           {show1 ? <Main.MainView /> : null}
//           {/* Inserta otro contenido aquí */}
//         </div>
//       </div>
   
//   );
// };

// export default Admin;
// import {useState} from 'react'
// import './styles/admin.css'
// import {useAuth} from '../Auth/AuthContext/AuthContext'
// import { Navbar, Nav, Button, Collapse, Dropdown } from 'react-bootstrap';
// import{showSuccess} from '../Auth/userComponents/HandlerError'
// import { useNavigate } from 'react-router-dom';
// import * as Main from './AdminViews/AdminIndex'

// const Admin = () => {
//   const {user, logout}=useAuth()
//   const navigate = useNavigate()
//   const [open, setOpen] = useState(false);
//   console.log('soy open', open)
//   const sessionCleaner = () => {
//     showSuccess('Sesion cerrada')
//     navigate('/')
//     setTimeout(()=>{
//       logout()
//     },1500)
    
//   };
// //Estados de componentes
// const [show1, setShow1]=useState(false)
// const [show2, setShow2]=useState(false)
// console.log('soy show: ',show1)
//   return (
//     <main className='d-flex flex-row '>
//       <div>
//     {/* Navbar for small screens */}
//     <Navbar bg="dark" variant="dark" expand="lg" className="d-lg-none">
//       <div className="container-fluid">
//         <Button
//           variant="dark"
//           onClick={() => setOpen(!open)}
//           aria-controls="sidebarMenu"
//           aria-expanded={open}
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </Button>
//       </div>
//     </Navbar>

//     {/* Collapsible Sidebar */}
//     <Collapse in={open}>
//       <div id="sidebarMenu" className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark normalSidebar" aria-expanded={open}>
//         <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
//           <svg className="bi pe-none me-2" width="40" height="32">
//             <use xlinkHref="#bootstrap" />
//           </svg>
//           <span className="fs-4">Administrador</span>
//         </a>
//         <hr />
//         <Nav className="flex-column mb-auto">
//           <Nav.Link onClick={()=>{setShow1(true)}} className="nav-link1 text-white">
//             <svg className="bi pe-none me-2" width="16" height="16">
//               <use xlinkHref="#grid" />
//             </svg>
//             Productos
//           </Nav.Link>
//           <Nav.Link href="/admin/users" className="nav-link1 text-white">
//             <svg className="bi pe-none me-2" width="16" height="16">
//               <use xlinkHref="#home" />
//             </svg>
//             Usuarios
//           </Nav.Link>
//           <Nav.Link href="#" className="nav-link1 text-white">
//             <svg className="bi pe-none me-2" width="16" height="16">
//               <use xlinkHref="#table" />
//             </svg>
//             Items
//           </Nav.Link>
//           <Nav.Link href="#" className="nav-link1 text-white">
//             <svg className="bi pe-none me-2" width="16" height="16">
//               <use xlinkHref="#speedometer2" />
//             </svg>
//             Configuraciones
//           </Nav.Link>
//           <Nav.Link href="#" className="nav-link1 text-white">
//             <svg className="bi pe-none me-2" width="16" height="16">
//               <use xlinkHref="#people-circle" />
//             </svg>
//             Nuevo proyecto
//           </Nav.Link>
//         </Nav>
//         <hr />
//         <Dropdown>
//           <Dropdown.Toggle variant="dark" id="dropdown-basic" className="d-flex align-items-center text-white">
//             <img src={user.image} alt="Not found" width="32" height="32" className="rounded-circle me-2" />
//             <strong>{user.nickname}</strong>
//           </Dropdown.Toggle>
//           <Dropdown.Menu variant="dark" className="text-small shadow">
//             <Dropdown.Item href="/admin/project/">Nuevo proyecto...</Dropdown.Item>
//             <Dropdown.Item href="/admin/page/1">Settings</Dropdown.Item>
//             <Dropdown.Item href="#">Perfil</Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item onClick={() => sessionCleaner()}>Cerrar Sesión</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </div>
//     </Collapse>
//     </div>
//     <div>
    
//     </div>
   
//     {/* Main Content Area */}
//     <div className="container-sm d-flex flex-nowrap ">
//       <div className="admin-main flex-grow-1">
//       {show1?
//         <Main.MainView/> : null}
//         {/* Content block */}
//         {/* Insert content here */}
//       </div>
//     </div>
//   </main>
//   )
// }

// export default Admin




// <main className='mainStyle'>
// {/* Navbar para pantallas pequeñas */}
// <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-lg-none">
//   <div className="container-fluid">
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#sidebarMenu"
//       aria-controls="sidebarMenu"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button>
//   </div>
// </nav>

// {/* Sidebar */}
// <div className="d-lg-block collapse">
//   <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark normalSidebar">
//     <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
//       <svg className="bi pe-none me-2" width="40" height="32">
//         <use xlinkHref="#bootstrap" />
//       </svg>
//       <span className="fs-4">Administrador</span>
//     </a>
//     <hr />
//     <ul className="nav nav-pills flex-column mb-auto">
//       <li>
//         <a href="/admin" className="nav-link1 text-white">
//           <svg className="bi pe-none me-2" width="16" height="16">
//             <use xlinkHref="#grid" />
//           </svg>
//           Productos
//         </a>
//       </li>
//       <li className="nav-item">
//         <a href="/admin/users" className="nav-link1 text-white">
//           <svg className="bi pe-none me-2" width="16" height="16">
//             <use xlinkHref="#home" />
//           </svg>
//           Usuarios
//         </a>
//       </li>
//       <li>
//         <a href="#" className="nav-link1 text-white">
//           <svg className="bi pe-none me-2" width="16" height="16">
//             <use xlinkHref="#table" />
//           </svg>
//           Items
//         </a>
//       </li>
//       <li>
//         <a href="#" className="nav-link1 text-white">
//           <svg className="bi pe-none me-2" width="16" height="16">
//             <use xlinkHref="#speedometer2" />
//           </svg>
//           Configuraciones
//         </a>
//       </li>
//       <li>
//         <a href="#" className="nav-link1 text-white">
//           <svg className="bi pe-none me-2" width="16" height="16">
//             <use xlinkHref="#people-circle" />
//           </svg>
//           Nuevo proyecto
//         </a>
//       </li>
//     </ul>
//     <hr />
//     <div className="dropdown">
//       <a
//         href="#"
//         className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
//         data-bs-toggle="dropdown"
//         aria-expanded="false"
//       >
//         <img src={user.image} alt="Not found" width="32" height="32" className="rounded-circle me-2" />
//         <strong>{user.nickname}</strong>
//       </a>
//       <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
//         <li>
//           <a className="dropdown-item" href="/admin/project/">
//             Nuevo proyecto...
//           </a>
//         </li>
//         <li>
//           <a className="dropdown-item" href="/admin/page/1">
//             Settings
//           </a>
//         </li>
//         <li>
//           <a className="dropdown-item" href="#">
//             Perfil
//           </a>
//         </li>
//         <li>
//           <hr className="dropdown-divider" />
//         </li>
//         <li>
//           <a className="dropdown-item" href='/' onClick={sessionCleaner}>
//             Cerrar Sesión
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>

// {/* Contenedor principal */}
// <div className="container d-flex flex-nowrap">
//   <div className="admin-main flex-grow-1">
//     {/* Aquí puedes renderizar el contenido dinámico */}
//   </div>
// </div>
// </main>