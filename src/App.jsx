import {Routes, Route, Navigate, useNavigate}from 'react-router-dom'
import {useAuth} from './Auth/AuthContext/AuthContext'
import { useEffect, useCallback } from 'react'
import interceptor from './Interceptor'
import * as View from './views/Index'
import * as Ad from './views/AdminViews/AdminIndex'

function App() {
  const {authenticated, user, loading, logout}= useAuth()
  const navigate = useNavigate()
 //console.log('validado? :', authenticated)
 //console.log('user: ',user)
 const redirectToError = useCallback((status, message) => {
  navigate('/error', { state: { status, message }})
}, [navigate])

 useEffect(()=>{
  interceptor(logout, 
    redirectToError//(status, message) => navigate('/error', { state: { status, message }})
)
 },[logout, redirectToError])

 if (loading) return <div>Loading...</div>

//  const isAllowed = (roles) => {
//    return authenticated && roles.includes(user?.role);
    
//   };

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
      {authenticated? <Route path='/admin/product/create' element={ <Ad.ProductCreate/>}/> : null}
      {authenticated? <Route path='/admin/product/update/:id' element={ <Ad.ProductEdition/>}/> : null}
      {authenticated? <Route path='/admin/product/item/:id' element={ <View.Item/>}/> : null}
      {authenticated? <Route path='/admin/product/item/create/:id' element={ <Ad.ItemCreate/>}/> : null}
      {authenticated? <Route path='/admin/product/item/update/:id' element={ <Ad.DetailCardUpd/>}/> : null}
      {authenticated? <Route path='/admin/users' element={ <Ad.UserComp/>}/> : null}
      {authenticated? <Route path='/admin/users/create' element={ <Ad.UserCreate/>}/> : null}
      {authenticated? <Route path='/admin/users/upgrade/:id' element={ <Ad.UserUpgrade/>}/> : null}
      {authenticated? <Route path='/admin/users/updateinfo/:id' element={ <Ad.EditPassword/>}/> : null}
      {authenticated? <Route path='/admin/users/:id' element={ <Ad.UserComp/>}/> : null}
      {authenticated? <Route path='/admin/users/update/:id' element={ <Ad.UserEdition/>}/> : null}
      {authenticated? <Route path='/admin/users/profile/:id' element={ <Ad.UserComp/>}/> : null}
      {authenticated? <Route path='/admin/help' element={ <Ad.HelpView/>}/> : null}
      <Route path='/login' element={<View.Login/>}/>
      <Route path='/error' element={<View.Error/>}/>
      <Route path='*' element={<View.Error  state={{ status: 404, message: "Página no encontrada" }}/>}/>
    </Routes>
    </>
  )
}

export default App
