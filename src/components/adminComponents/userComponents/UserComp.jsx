import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import User from './User'
//import './userComponent.css'
import { getUserById, cleanState}from '../../../redux/actions'

const UserComp = () => {
  const dispatch = useDispatch()
  const {id}= useParams()
  const singleUser = useSelector((state)=> state.UserById)

  useEffect(()=>{
      dispatch(getUserById(id))
    return ()=>{
      dispatch(cleanState())}
  },[id])

const single = true
  return (
    <div className="imageBack">
      <div className="coverBack">
        <div className="container-md modal-content colorBack formProductContainer rounded-4 shadow ">
          <User  key={singleUser.id} user={singleUser} isSingleUser={single}/>
        </div>
      </div>
      </div>
  )
}

export default UserComp
