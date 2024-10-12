import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className="imageBack">
    <div className="coverMail">
      <div className="container-md modal-content colorBack contactContainer rounded-4 shadow">
        <div className="container mt-5">
          <h1>Quienes somos:</h1>
          <p className='cover-p'>
            Que se yo quienes somos (tengo poca imaginacion para esto y menos a las 12.30 am). Tal vez mañana con un poco mas de inspiracion pueda hacer algo mejor, por el momento esto es todo lo que hay.
          </p>
          <Link className="btn btn-secondary mb-3" to={'/'}>Volver</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About