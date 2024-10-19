import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { getStoredImgs} from '../../../redux/actions'

const ImagesComponent = () => {
    const dispatch = useDispatch()
    const images = useSelector((state)=>state.Images);

    useEffect(()=>{
        dispatch(getStoredImgs())
    },[])

  return (
    <div>
     {images?.map((img)=>
    <div key={img.id}>
     <Link to={'/'}>
     <img src={img.imageUrl} alt= 'Imagen no hallada'/>
     </Link>
    </div>
    )}
    </div>
  )
}

export default ImagesComponent