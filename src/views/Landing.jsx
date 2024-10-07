import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getInfo, getProduct} from '../redux/actions'
import * as Cp from '../components/IndexComponents'
import {useAuth} from '../Auth/AuthContext/AuthContext'
import SessionWarning from '../Auth/AuthContext/SessionWarning'


const Landing = () => {
  const {expirationTime}= useAuth()
  const dispatch = useDispatch()
  const info = useSelector((state)=>state.Landing)
  const products = useSelector((state)=>state.Products)
  useEffect(()=>{
    dispatch(getInfo())
    dispatch(getProduct())
  },[])
  //console.log('soy info',info)

  return (
    <>
    <div className='min-vh-100 cover-container1 d-flex w-100 p-3 mx-auto flex-column' style={{backgroundImage:`url(${info.image}||https://img.freepik.com/foto-gratis/cascada-barco-limpio-china-natural_1417-1356.jpg)`}}>
    <Cp.Header/>
    <SessionWarning expirationTime={expirationTime}/>
    <section className='px-3'>
      <div className='caption-title'>
        <h1>{info?.title}</h1>
        <p className='cover-p'>{info?.description}</p>
        <p className='lead'>
          <Link className='btn btn-lg btn-ligth fw-bold border-white bg-white ' to='/error'  state={{ status: 404, message: "Página no encontrada" }}>
            Vea más...
        </Link>
        </p>
      </div>
      <br/>
      <br/>
    </section>
    </div>
    <div className='my-2'></div>
    <section>
    <Cp.MyCarousel info={products}/>
    <Cp.Marketing products = {products} param={'detalle'}/>
    </section>
    <Cp.Footer/>
    
    </> 
    
  )
}

export default Landing
