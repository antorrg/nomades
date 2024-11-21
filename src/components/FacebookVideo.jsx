import React, { useState } from 'react';
import { Container, Row, Col, Ratio, Button } from 'react-bootstrap';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Arr from '../utils/SlickCarousel'

const FacebookVideo = () => {
  const [mainVideo, setMainVideo] = useState({
    id: 'fb1',
    type: 'facebook',
    title: 'Facebook',
    text: 'Haga click en el boton verde para seleccionar el video principal.',
    url: 'https://fb.watch/vQGCkbbS_y/',
  });

  const videoList = [
    {
      id: 'fb1',
      type: 'facebook',
      title: 'Facebook',
      text: 'Haga click en el boton verde para seleccionar el video principal.',
      url: 'https://fb.watch/vQGCkbbS_y/',
    },
    {
      id: 'fb2',
      type: 'facebook',
      title: 'Facebook',
      text: 'Haga click en el boton verde para seleccionar el video principal.',
      url: 'https://www.facebook.com/reel/1274719967241755',
    },
    {
      id: 'fb3',
      type: 'facebook',
      title: 'Facebook',
      text: 'Haga click en el boton verde para seleccionar el video principal.',
      url: 'https://fb.watch/v_aDfl8zZa/',
    },
  ];

  const handleVideoSelect = (video) => {
    setMainVideo(video);
  };


  return (
    <Container>
      {/* Video Principal */}
      <Row className="featurette mt-5">
        <Col xs={12} md={5}>
          <h2 className="featurette-heading fw-normal lh-1">
            {mainVideo.title}
            </h2>
          <p className="lead">
            {mainVideo.text}
            </p>
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
      <Slider {...Arr.sliderSettings}>
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
              Ver video
            </Button>
          </div>
        ))}
          </Slider>
      </Row>
    </Container>
  );
};

export default FacebookVideo;
