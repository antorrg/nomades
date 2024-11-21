import React, { useState } from 'react';
import { Container, Row, Col, Ratio, Button } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Arr from '../utils/SlickCarousel';

const YouTubeVideo = () => {
  const [mainVideo, setMainVideo] = useState({
    id: '6',
    title: 'Video principal',
    description: 'Este es el video principal seleccionado.',
    url: 'https://youtu.be/oRH5lH7F7TY',
  });

  const videoList = [
    {
      id: '6',
      title: 'Video 1',
      description: 'Descripción del video 1.',
      url: 'https://youtu.be/oRH5lH7F7TY',
    },
    {
      id: '7',
      title: 'Video 2',
      description: 'Descripción del video 2.',
      url: 'https://youtu.be/AHzxeA2aEk0',
    },
    {
      id: '8',
      title: 'Video 3',
      description: 'Descripción del video 3.',
      url: 'https://youtu.be/0apXgMZ52nM?si=2rnv_tCySeZ8RoPD',
    },
  ];

  const handleVideoSelect = (video) => {
    setMainVideo(video);
  };


   const videoId = (url) => {
    const match = url.match(/(?:https?:\/\/(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/))([^\s&]+)/);
    return match ? match[1] : null;
  };


  return (
    <Container>
      {/* Video principal */}
      <Row className="featurette mt-5">
        <Col xs={12} md={5}>
          <h2 className="featurette-heading fw-normal lh-1">{mainVideo.title}</h2>
          <p className="lead">{mainVideo.description}</p>
        </Col>
        <Col xs={12} md={7}>
          <Ratio aspectRatio="16x9">
            <iframe
              src={`https://www.youtube.com/embed/${videoId(mainVideo.url)}`}
              title={mainVideo.title}
              allowFullScreen
            />
          </Ratio>
        </Col>
      </Row>

      {/* Carrusel de miniaturas */}
      <Row className="mt-4">
        <Slider {...Arr.sliderSettings}>
          {videoList.map((video) => (
            <div key={video.id} className="p-2">
              <Ratio aspectRatio="16x9">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId(video.url)}`}
                  title={`Miniatura ${video.id}`}
                  allowFullScreen
                />
              </Ratio>
              <Button
                 className="mt-2 w-20"
                 variant="outline-success"
                 size='sm'
                onClick={() => handleVideoSelect(video)}
              >
                Ver video
              </Button>
              <Button
                 className="mt-2 w-20"
                 variant="outline-primary"
                 size='sm'
                onClick={() => console.log(editar)}
              >
                Editar
              </Button>
              <Button
                 className="mt-2 w-20"
                 variant="outline-danger"
                 size='sm'
                onClick={() => console.log('borrado')}
              >
                Eliminar
              </Button>
            </div>
          ))}
        </Slider>
      </Row>
    </Container>
  );
};

export default YouTubeVideo;


// import React, { useState } from 'react';
// import YouTube from 'react-youtube';
// import { Container, Row, Col, Ratio, Button } from 'react-bootstrap';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import * as Arr from '../utils/SlickCarousel';

// const YouTubeVideo = () => {
//   const [mainVideo, setMainVideo] = useState({
//     id: '6',
//     type: 'youTube',
//     title: 'YouTube',
//     text: 'Haga clic en el botón verde para seleccionar el video principal.',
//     url: 'https://youtu.be/oRH5lH7F7TY',
//   });

//   const videoList = [
//     {
//       id: '6',
//       type: 'youTube',
//       title: 'Video 1',
//       text: 'Haga clic para ver este video (id:6).',
//       url: 'https://youtu.be/oRH5lH7F7TY',
//     },
//     {
//       id: '7',
//       type: 'youTube',
//       title: 'Video 2',
//       text: 'Este es otro video (id:7).',
//       url: 'https://youtu.be/AHzxeA2aEk0',
//     },
//     {
//       id: '8',
//       type: 'youTube',
//       title: 'Video 3',
//       text: 'Este es un tercer video (id:8).',
//       url: 'https://youtu.be/32tnwIMBWQg',
//     },
//   ];

//   // Extraer el ID del video desde la URL
//   const extractVideoId = (url) => {
//     const match = url.match(/(?:https?:\/\/(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/))([^\s&]+)/);
//     return match ? match[1] : null;
//   };

//   const handleVideoSelect = (video) => {
//     setMainVideo(video);
//   };

//   const opts = {
//     playerVars: {
//       autoplay: 0,
//     },
//   };

//   const onReady = (event) => {
//     event.target.pauseVideo();
//   };

//   return (
//     <Container>
//       {/* Video Principal */}
//       <Row className="featurette align-items-center mb-5">
//         <Col xs={12} md={5}>
//           <h2 className="featurette-heading fw-normal lh-1">{mainVideo.title}</h2>
//           <p className="lead">{mainVideo.text}</p>
//         </Col>
//         <Col xs={12} md={7}>
//           <Ratio aspectRatio="16x9" className='video-container'>
//             <YouTube videoId={extractVideoId(mainVideo.url)} opts={opts} onReady={onReady} />
//           </Ratio>
//           </Col>
//       </Row>

//       {/* Lista de Miniaturas */}
//       <Row className="mt-4">
//         <Slider {...Arr.sliderSettings}>
//           {videoList.map((video) => (
//             <div key={video.id} className="p-2">
//               <Ratio aspectRatio="16x9">
//                 <iframe
//                   src={`https://www.youtube.com/embed/${extractVideoId(video.url)}`}
//                   title={`Miniatura ${video.id}`}
//                   allowFullScreen
//                 />
//               </Ratio>
//               <Button
//                 className="mt-2 w-100"
//                 variant="outline-success"
//                 size="sm"
//                 onClick={() => handleVideoSelect(video)}
//               >
//                 Ver video
//               </Button>
//             </div>
//           ))}
//         </Slider>
//       </Row>
//     </Container>
//   );
// };

// export default YouTubeVideo;
