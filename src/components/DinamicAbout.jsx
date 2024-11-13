import React from 'react'

const DinamicAbout = ({items}) => {
  const aboutUs = items.filter(item => item.enable);

    // <div className="aboutContainer colorBack rounded-4 shadow">
  return (
      <div className="modal-content p-2">
        {aboutUs?.map((item, index) => (
          <div key={index}>
            <div className="row featurette">
              {/* Alterna el orden usando order-md-2 solo en imágenes impares */}
              <div className={`col-md-7 ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
                <h4 className="featurette-heading-4">{item.title}</h4>
                <p className="lead">{item.text}</p>
              </div>
              {item.imgShow?
              <div className={`col-md-5 ${index % 2 !== 0 ? 'order-md-1' : ''}`}>
                <img
                  className="bd-placeholder-img bd-placeholder-img-sm featurette-image img-fluid mx-auto mt-3 me-2"
                  src={item.image}
                  alt="Not found"
                  style={{maxWidth: '11rem'}}
                />
              </div>: null}
            </div>
            <hr />
          </div>
        ))}
      </div>
  
  )
}

export default DinamicAbout