import {useEffect, useState} from 'react' 
import VideoLayout from './VideoLayout'
import {useDispatch, useSelector} from 'react-redux'
import {getAdminMedia} from '../../../../redux/actions'
import YouTubeVideoView from '../../EditVideos/YouTubeVideoView'
import InstVideoView from '../../EditVideos/InstVideoView'
import FaceVideoView from '../../EditVideos/FaceVideoView'

const Videos = () => {
  const dispatch = useDispatch()
const media = useSelector((state)=>state.MediaAd)
const [activeTab, setActiveTab] = useState('facebook');
  

const handleTabChange = (tabName) => {
  setActiveTab(tabName);
};
useEffect(()=>{
  dispatch(getAdminMedia())
},[])

  return (
      <section className="container-fluid">
      
        <h2 className="fw-light">Gestion de contenido multimedia:</h2>
        <VideoLayout
      activeTab={activeTab}
      handleTabChange={handleTabChange}
    >
      {activeTab === 'facebook' && (
        <FaceVideoView media={media}/>
      )}
      {activeTab === 'instagram' && (
        <InstVideoView media={media}/>
      )}
      {activeTab === 'youtube' && (
        <YouTubeVideoView media={media}/>
      )}
    </VideoLayout>
  </section>
  )
}

export default Videos
 