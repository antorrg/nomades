import React, { useState } from 'react';
import { Container, Row, Col, Ratio, Button } from 'react-bootstrap';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Arr from '../utils/CustomArrows'

const SocialVideo = () => {
  const [mainVideo, setMainVideo] = useState({
    id: 'fb1',
    url: 'https://fb.watch/vQGCkbbS_y/',
  });

  const videoList = [
    {
      id: 'fb1',
      url: 'https://fb.watch/vQGCkbbS_y/',
    },
    {
      id: 'fb2',
      url: 'https://www.facebook.com/reel/1274719967241755',
    },
    {
      id: 'fb3',
      url: 'https://fb.watch/v_aDfl8zZa/',
    },
  ];

  const handleVideoSelect = (video) => {
    setMainVideo(video);
  };

  const getEmbedUrl = (url) => {
    // Facebook videos require embedding with "embed" at the end of the URL
    return `${url}embed`;
  };
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <Arr.CustomPrevArrow />,
    nextArrow: <Arr.CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Phones
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <Container>
      {/* Video Principal */}
      <Row className="featurette">
        <Col xs={12} md={5}>
          <h2>Apartado de video principal</h2>
          <p>Haz clic en un botón debajo de las miniaturas para cambiar el video principal.</p>
        </Col>
        <Col xs={12} md={7}>
          <Ratio aspectRatio="16x9">
          <iframe
            src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(mainVideo.url)}&show_text=true&width=500&height=300&appId`}
                           
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </Ratio>
        </Col>
      </Row>

      {/* Lista de Miniaturas con Botones */}
      <Row className="mt-4">
      <Slider {...sliderSettings}>
        {videoList.map((video) => (
          <div key={video.id} xs={4} md={3} className="p-2">
            <Ratio aspectRatio="16x9">
              <iframe
                src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(video.url)}&show_text=true&width=500&height=300&appId`}
                title={`Miniatura ${video.id}`}
                frameBorder="0"
                allowFullScreen
              />
            </Ratio>
            <Button
              className="mt-2 w-20"
              variant="outline-success"
              size='sm'
              onClick={() => handleVideoSelect(video)}
            >
              Ver este video
            </Button>
          </div>
        ))}
          </Slider>
      </Row>
    </Container>
  );
};

export default SocialVideo;
