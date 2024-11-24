import {Routes, Route, Navigate, useNavigate, Outlet}from 'react-router-dom'
import {useAuth} from './Auth/AuthContext/AuthContext'
import { useEffect, useCallback } from 'react'
import interceptor from './Interceptor'
import ProtectedRoute from './ProtectedRoutes'
import * as View from './views/Index'
import * as Ad from './views/AdminViews/AdminIndex'
import SessionWarning from './Auth/AuthContext/SessionWarning'

function App() {
  const {authenticated, logout, expirationTime}= useAuth()
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



  return (
    <>
    <SessionWarning expirationTime={expirationTime}/>
    <Routes>
      <Route path='/' element={<View.Landing/>}/>
      <Route path='/detalle/:id' element={<View.Detail/>}/>
      <Route path='/detalle/item/:id' element={<View.Item/>}/>
      <Route path='/contacto' element={<View.Contact/>}/>
      <Route path='/acerca' element={<View.About/>}/>
      <Route path='/nuestro-trabajo' element={<View.OurWork/>}/>
      <Route path='/videos' element={<View.Videos/>}/>
      <Route path='/admin' element={
        <ProtectedRoute>
        <View.Admin />
      </ProtectedRoute>
      }>
        <Route  index element={<Ad.TabsPage/>} />
        <Route path='/admin/product' element={<Ad.ProductComp/>}/>
        <Route path='/admin/product/:id' element={<Ad.ProductComp/>}/>
        <Route path='/admin/product/create' element={<Ad.ProductCreate/>}/>
        <Route path='/admin/product/update/:id' element={<Ad.ProductEdition/>}/>
        <Route path='/admin/product/item/:id' element={<Ad.AdminItem/>}/>
        <Route path='/admin/product/item/create/:id' element={<Ad.ItemCreate/>}/>
        <Route path='/admin/product/item/update/:id' element={ <Ad.DetailCardUpd/>}/>
        <Route path='/admin/users' element={ <Ad.UserComp/>}/>
        <Route path='/admin/users/create' element={<Ad.UserCreate/>}/>
        <Route path='/admin/users/upgrade/:id' element={ <Ad.UserUpgrade/>}/>
        <Route path='/admin/users/updateinfo/:id' element={ <Ad.EditPassword/>}/> 
        <Route path='/admin/users/:id' element={ <Ad.UserComp/>}/> 
        <Route path='/admin/users/update/:id' element={ <Ad.UserEdition/>}/> 
        <Route path='/admin/users/profile/:id' element={ <Ad.UserComp/>}/> 
        <Route path='/admin/media/images' element={ <Ad.ImagesComponent/>}/>
        {/* <Route path= '/admin/page' element={<Ad.TabsPage/>}/> */}
        <Route path= '/admin/work/create' element={<Ad.TabsPage/>}/>
        <Route path= '/admin/work/update/:id' element={<Ad.OurWorkEdit/>}/>
        <Route path= '/admin/land/create' element={<Ad.CreateLanding/>}/>
        <Route path= '/admin/land/update/:id' element={<Ad.LandEdition/>}/>
        <Route path= '/admin/media/create' element={<Ad.MediaCreate/>}/>
        <Route path= '/admin/media/update/:id' element={<Ad.MediaUpdate/>}/>
        <Route path='/admin/help' element={ <Ad.HelpView/>}/> 
      </Route>
      <Route path='/login' element={<View.Login/>}/>
      <Route path='/error' element={<View.Error/>}/>
      <Route path='*' element={<View.Error  state={{ status: 404, message: "Página no encontrada" }}/>}/>
    </Routes>
    </>
  )
}

export default App
