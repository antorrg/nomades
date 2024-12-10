import {Link} from 'react-router-dom'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Añade un desplazamiento suave
    });
  };
  return (
    <div className='text-muted py-5'>
    <div className='container'>
    <div className="w-50">
      <div  className="d-flex align-items-start flex-column flex-sm-column flex-md-row w-30  flex-lg-row w-20  justify-content-between" >
        <a href='#' style={{
        background: "transparent",
        border: "none",
      
        width:'1rem',
        height: '1rem',
        borderRadius:'50%',
        position: "relative",
        top: "0",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
        display: "flex", // Activa Flexbox
        alignItems: "center", // Centra verticalmente
        justifyContent: "center", // Centra horizontalmente
        marginBottom: "2rem",
       
      }}>
          <i  className="bi bi-facebook text-primary m-1" style={{ fontSize: "1.5rem", backgroundColor:'transparent' }} ></i>
        Facebook
        </a>
        <a href='#' style={{
        background: "transparent",
        border: "none",
        width:'1rem',
        height: '1rem',
        borderRadius:'50%',
        position: "relative",
        top: "0",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
        display: "flex", // Activa Flexbox
        alignItems: "center", // Centra verticalmente
        justifyContent: "center", // Centra horizontalmente
        marginBottom: "2rem",
  
      }}>
          <i  className="bi bi-instagram text-danger m-1" style={{ fontSize: "1.5rem", backgroundColor:'transparent' }} ></i>
          Instagram
        </a>
        <a href='#' style={{
        background: "transparent",
        border: "none",
        width:'1rem',
        height: '1rem',
        borderRadius:'50%',
        position: "relative",
        top: "0",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
        display: "flex", // Activa Flexbox
        alignItems: "center", // Centra verticalmente
        justifyContent: "center", // Centra horizontalmente
        marginBottom: "2rem",
      }}>
          <i  className="bi bi-whatsapp text-success m-1" style={{ fontSize: "1.5rem", backgroundColor:'transparent' }} ></i>
        WhatsApp
        </a>
      </div>
      </div>
    <button
      className="custom-arrow up-arrow float-end mt-3 mb-1"
      aria-label="Volver a inicio de pagina"
      onClick={scrollToTop}
      style={{
        background: "rgb(178,178,178)",
        border: "none",
        width:'50px',
        height: '50px',
        borderRadius:'50%',
        position: "relative",
        left: "-30px",
        top: "0",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
        display: "flex", // Activa Flexbox
        alignItems: "center", // Centra verticalmente
        justifyContent: "center", // Centra horizontalmente
      }}
    >
      <i className="bi bi-chevron-up" style={{ fontSize: "3rem", color: "black", backgroundColor:'transparent' }}></i>
    </button>
    
    
    </div>
    </div>
  )
}

export default Footer