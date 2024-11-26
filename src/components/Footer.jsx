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
    <hr></hr>
    <button
      className="custom-arrow up-arrow float-end mt-3 mb-1"
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
     <p className='mb-1'>Este es el footer</p>
    </div>
    </div>
  )
}

export default Footer