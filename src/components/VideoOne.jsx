import React from 'react';
import YouTube from 'react-youtube';

const VideoOne = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return (
    <div className='container'>
        VideoOne
        <div className="row featurette">
      <div className="col-md-5">
        <h2 className="featurette-heading fw-normal lh-1">Este seria un apartado de video.</h2>
        <p className="lead">Algun video de youtube que pueda describir y llamar la atencion del cliente con la publicacion acerca de las cabañitas.</p>
      </div>
      <div className="col-md-7">
      <YouTube videoId="oRH5lH7F7TY" opts={opts} onReady={onReady} />
      </div>
    </div>
    </div>
  )
}

export default VideoOne