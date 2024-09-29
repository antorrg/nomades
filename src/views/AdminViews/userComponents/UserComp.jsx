import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {AdminNav} from '../AdminIndex'
import User from './User'
import {getAllUsers, getUserById, cleanState}from '../../../redux/actions'

const UserComp = () => {
  const dispatch = useDispatch()
  const {id}= useParams()
  const users = useSelector((state)=> state.Users)
  const singleUser = useSelector((state)=> state.UserById)
  const [single, setSingle]= useState(false)

  useEffect(()=>{
    if(id){
      setSingle(true)
      dispatch(getUserById(id))
    }else{
      setSingle(false)
    dispatch(getAllUsers())
    }
    return ()=>{
      dispatch(cleanState())}
  },[id])

  return (
    <>
    <AdminNav/>
    {!id ?
    <>
    <div className='album py-5 bg-light'>
      <div className='container'>
        {users?.map((user)=>
        <User key={user.id} user={user} isSingleUser={single}/>
        )}
      </div>
    </div></>
    :
    <>
    <div className="imageBack">
      <div className="coverBack">
        <div className="container-md modal-content colorBack formProductContainer rounded-4 shadow ">
          <User  key={singleUser.id} user={singleUser} isSingleUser={single}/>
        </div>
      </div>
      </div></>
      }
    </>
  )
}

export default UserComp
