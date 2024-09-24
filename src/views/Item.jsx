import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { DetailCard } from '../components/IndexComponents'
import {getItem, cleanState} from '../redux/actions'

const Item = () => { 
  const dispatch = useDispatch()
  const item = useSelector((state)=>state.Item)
  const {id}=useParams()
  
  useEffect(()=>{
    dispatch(getItem(id))
    return ()=>{cleanState()}
  },[id])

  return (
    <>
    <DetailCard item={item}/>
    </>
  )
}

export default Item
