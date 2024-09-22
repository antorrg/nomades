import {useState} from 'react'
import './styles/admin.css'
import {useAuth} from '../Auth/AuthContext/AuthContext'
import { Navbar, Nav, Button, Collapse, Dropdown } from 'react-bootstrap';
import{showSuccess} from '../Auth/userComponents/HandlerError'
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const {user, logout}=useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);

  const sessionCleaner = () => {
    showSuccess('Sesion cerrada')
    navigate('/')
    setTimeout(()=>{
      logout()
    },1500)
    
  };

  return (
    <main>
    {/* Navbar for small screens */}
    <Navbar bg="dark" variant="dark" expand="lg" className="d-lg-none">
      <div className="container-fluid">
        <Button
          variant="dark"
          onClick={() => setOpen(!open)}
          aria-controls="sidebarMenu"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </Button>
      </div>
    </Navbar>

    {/* Collapsible Sidebar */}
    <Collapse in={open}>
      <div id="sidebarMenu" className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark normalSidebar">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Administrador</span>
        </a>
        <hr />
        <Nav className="flex-column mb-auto">
          <Nav.Link href="/admin" className="nav-link1 text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#grid" />
            </svg>
            Productos
          </Nav.Link>
          <Nav.Link href="/admin/users" className="nav-link1 text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home" />
            </svg>
            Usuarios
          </Nav.Link>
          <Nav.Link href="#" className="nav-link1 text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#table" />
            </svg>
            Items
          </Nav.Link>
          <Nav.Link href="#" className="nav-link1 text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2" />
            </svg>
            Configuraciones
          </Nav.Link>
          <Nav.Link href="#" className="nav-link1 text-white">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#people-circle" />
            </svg>
            Nuevo proyecto
          </Nav.Link>
        </Nav>
        <hr />
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic" className="d-flex align-items-center text-white">
            <img src={user.image} alt="Not found" width="32" height="32" className="rounded-circle me-2" />
            <strong>{user.nickname}</strong>
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark" className="text-small shadow">
            <Dropdown.Item href="/admin/project/">Nuevo proyecto...</Dropdown.Item>
            <Dropdown.Item href="/admin/page/1">Settings</Dropdown.Item>
            <Dropdown.Item href="#">Perfil</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => sessionCleaner()}>Cerrar Sesión</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Collapse>

    {/* Main Content Area */}
    <div className="container d-flex flex-nowrap">
      <div className="admin-main flex-grow-1">
        {/* Content block */}
        {/* Insert content here */}
      </div>
    </div>
  </main>
  )
}

export default Admin




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