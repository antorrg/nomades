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
     <p className='float-end mb-1'>
        <a className='btn btn-sm btn-outline-secondary' href='#' onClick={scrollToTop}style={{cursor:'pointer'}}>Volver</a>
     </p>
     <p className='mb-1'>Este es el footer</p>
    </div>
    </div>
  )
}

export default Footer