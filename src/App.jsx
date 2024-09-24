import {Routes, Route, Navigate}from 'react-router-dom'
import {useAuth} from './Auth/AuthContext/AuthContext'
import { useEffect } from 'react'
import interceptor from './Interceptor'
import * as View from './views/Index'
import * as Ad from './views/AdminViews/AdminIndex'

function App() {
  const {authenticated, user, loading, logout}= useAuth()
 //console.log('validado? :', authenticated)
 //console.log('user: ',user)
 useEffect(()=>{
  interceptor(logout)
 },[])

 if (loading) return <div>Loading...</div>

 const isAllowed = (roles) => {
   return authenticated && roles.includes(user?.role);
    
  };

  return (
    <>
    <Routes>
      <Route path='/' element={<View.Landing/>}/>
      <Route path='/detalle/:id' element={<View.Detail/>}/>
      <Route path='/detalle/item/:id' element={<View.Item/>}/>
      <Route path='/contacto' element={<View.Contact/>}/>
      <Route path='/acerca' element={<View.About/>}/>
      {authenticated? <Route path='/admin' element={ <View.Admin/>}/> : null}
      {authenticated? <Route path='/admin/product' element={ <Ad.ProductComp/>}/> : null}
      {authenticated? <Route path='/admin/product/:id' element={ <Ad.ProductComp/>}/> : null}
      {authenticated? <Route path='/admin/product/item/:id' element={ <Ad.ProductComp/>}/> : null}
      {authenticated? <Route path='/admin/user' element={ <Ad.UserComp/>}/> : null}
      {authenticated? <Route path='/admin/user/:id' element={ <View.Admin/>}/> : null}
      <Route path='/login' element={<View.Login/>}/>
      <Route path='/error' element={<View.Error/>}/>
      <Route path='/*' element={<View.Error  state={{ status: 404, message: "Página no encontrada" }}/>}/>
    </Routes>
    </>
  )
}

export default App
