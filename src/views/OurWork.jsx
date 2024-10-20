import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getWorks} from '../redux/actions'
import {Header} from '../components/IndexComponents'

const OurWork = () => {
  const dispatch = useDispatch();
  const featurettes = useSelector((state) => state.Works);

  useEffect(()=>{
    dispatch(getWorks())
  },[])

  return (
    <div className="imageBack">
    <Header />
    <div className="container coverAbout">
      <div className="caption-nav">
        <h2 className="about-h1">Nuestro trabajo:</h2>
      </div>
     <div className="aboutContainer colorBack rounded-4 shadow">
      <div className="modal-content p-2">
        {featurettes?.map((item, index) => (
          <div key={index}>
            <div className="row featurette">
              {/* Alterna el orden usando order-md-2 solo en imágenes impares */}
              <div className={`col-md-7 ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
                <h2 className="featurette-heading fw-normal lh-1">{item.title}</h2>
                <p className="lead">{item.text}</p>
              </div>
              <div className={`col-md-5 ${index % 2 !== 0 ? 'order-md-1' : ''}`}>
                <img
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto mt-3"
                  src={item.image}
                  alt="Not found"
                />
              </div>
            </div>
            <hr className="featurette-divider" />
          </div>
        ))}
      </div>
    </div>
    </div>
  </div>
    
  )
}

export default OurWork

{/* <div className="aboutContainer colorBack rounded-4 shadow">
        <div className="modal-content p-2">
          <div className="row featurette">
            <div className="col-lg-7">
              <h2 className="featurette-heading fw-normal lh-1">
                First featurette heading.
              </h2>
              <p className="lead">
                Some great placeholder content for the first featurette here.
                Imagine some exciting prose here.
              </p>
            </div>
            <div className="col-md-5">
              <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto mt-3" src="https://res.cloudinary.com/dt1lpgumr/image/upload/c_scale,w_auto/f_auto,q_auto/roja13.webp?_a=BAMAH2TE0" alt='Not found'
              />
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Oh yeah, it’s that good.{" "}
                <span className="text-body-secondary">See for yourself.</span>
              </h2>
              <p className="lead">
                Another featurette? Of course. More placeholder content here
                to give you an idea of how this layout would work with some
                actual real-world content in place.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto mt-3" src="https://res.cloudinary.com/dt1lpgumr/image/upload/c_scale,w_auto/f_auto,q_auto/roja13.webp?_a=BAMAH2TE0" alt='Not found'
              />
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                And lastly, this one.{" "}
                <span className="text-body-secondary">Checkmate.</span>
              </h2>
              <p className="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read,
                simply here to give you a better view of what this would look
                like with some actual content. Your content.
              </p>
            </div>
            <div className="col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto mt-3" src="https://res.cloudinary.com/dt1lpgumr/image/upload/c_scale,w_auto/f_auto,q_auto/roja13.webp?_a=BAMAH2TE0" alt='Not found'
              />
            </div>
          </div>
        </div>
      </div> */}

      // const featurettes = [
      //   {
      //     title: "First featurette heading.",
      //     text: "Some great placeholder content for the first featurette here. Imagine some exciting prose here.",
      //     image: "https://res.cloudinary.com/dt1lpgumr/image/upload/c_scale,w_auto/f_auto,q_auto/roja13.webp?_a=BAMAH2TE0",
      //   },
      //   {
      //     title: "Oh yeah, it’s that good.",
      //     text: "Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.",
      //     image: "https://res.cloudinary.com/dt1lpgumr/image/upload/c_scale,w_auto/f_auto,q_auto/roja13.webp?_a=BAMAH2TE0",
      //   },
      //   {
      //     title: "Este es el anteultimo.",
      //     text: "And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.",
      //     image: "https://res.cloudinary.com/dt1lpgumr/image/upload/c_scale,w_auto/f_auto,q_auto/roja13.webp?_a=BAMAH2TE0",
      //   },
      //   {
      //     title: "And lastly, this one.",
      //     text: "And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.",
      //     image: "https://res.cloudinary.com/dt1lpgumr/image/upload/c_scale,w_auto/f_auto,q_auto/roja13.webp?_a=BAMAH2TE0",
      //   },
      // ];
      