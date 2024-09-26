import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AdminNav} from '../AdminIndex'
import User from './User'
import {getAllUsers}from '../../../redux/actions'

const UserComp = () => {
  const dispatch = useDispatch()
  const users = useSelector((state)=> state.Users)

  useEffect(()=>{

    dispatch(getAllUsers())
    
  },[])

  return (
    <>
    <AdminNav/>
    <div className='album py-5 bg-light'>
      <div className='container'>
        {users?.map((user)=>
        <User key={user.id} user={user}/>
        )}
      </div>
    </div>
    </>
  )
}

export default UserComp
