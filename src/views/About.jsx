import {useEffect} from "react";
import { Header } from "../components/IndexComponents";
import { useDispatch, useSelector } from "react-redux";
import { getAbout } from "../redux/actions";
import { Link } from "react-router-dom";
import {DinamicAbout} from "../components/IndexComponents"
import "./styles/about.css";

const About = () => {
  const dispatch = useDispatch()
  //const items = useSelector((state)=>state.About)

  useEffect(()=>{
    dispatch(getAbout())
  },[])
  const items= ''
  // const items = [
  //   {id:1, title: 'titulo de ejemplo', text: 'texto de ejemplo para llenar el lugar', image: '/fondoImg.png', enable: false, imgShow: false},
  //   {id:1, title: 'titulo de ejemplo', text: 'texto de ejemplo para llenar el lugar aoidfpoiasd a`podif aspodi apsdoifasd poiads fpoisda psdaoifhsdapfo sadpods fpsdh sdpoifj sadpoid sp98eehfdjcxñlkjja', image: '/fondoImg.png', enable: true, imgShow: true}
  // ]

  return (
    <div className="imageBack">
      <Header />
      <div className="container coverAbout">
        <div className="caption-nav">
          <h1 className="about-h1">Quienes somos:</h1>
        </div>
          <div className="modal-content p-2">
          <div className="container-lg modal-content colorBack contactContainer rounded-4 shadow">
            <div className="container mt-5">
              {(!items || items === undefined || items === null)?
               <p className='cover-p'>
               Somos "Nomades, Cabañas de Pastores", un emprendimiento que comenzo hace algun tiempo y fue tomando forma con los años.
             </p>
              :
              <DinamicAbout items={items}/>
             }
              <Link className="btn btn-secondary mb-3" to={'/'}>Volver</Link>
            </div>
            <hr></hr>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;

{
  /* <div className="container-lg modal-content colorBack contactContainer rounded-4 shadow">
<div className="container mt-5">
  <h1>Quienes somos:</h1>
  <p className='cover-p'>
    Que se yo quienes somos (tengo poca imaginacion para esto y menos a las 12.30 am). Tal vez mañana con un poco mas de inspiracion pueda hacer algo mejor, por el momento esto es todo lo que hay.
  </p>
  <Link className="btn btn-secondary mb-3" to={'/'}>Volver</Link>
</div>
<hr></hr>
</div> */
}
