import React, { useState } from 'react';
import { Container, Row, Col, Ratio, Button } from 'react-bootstrap';

const VideoThree = () => {
  const [mainVideo, setMainVideo] = useState({
    id: 'post1',
    type: 'instagram',
    url: 'https://www.instagram.com/reel/DCUGr7JMud4/',
  });

  const videoList = [
    {
      id: 'post1',
      type: 'instagram',
      url: 'https://www.instagram.com/reel/DCUGr7JMud4/',
    },
    {
      id: 'post2',
      type: 'instagram',
      url: 'https://www.instagram.com/reel/DCmIOYeIUai/',
    },
    {
      id: 'post3',
      type: 'instagram',
      url: 'https://www.instagram.com/reel/DCb1HKOIhgS/',
    },
  ];

  const handleVideoSelect = (video) => {
    setMainVideo(video);
  };

  const getEmbedUrl = (url) => {
    const parts = url.split('/');
    const videoId = parts[parts.length - 2];
    return `https://www.instagram.com/reel/${videoId}/embed`;
  };

  return (
    <Container>
      {/* Video Principal */}
      <Row className="featurette">
        <Col xs={12} md={5}>
          <h2 className="featurette-heading fw-normal lh-1">
            Instagram
            </h2>
          <p className="lead">
            Haga click en el boton verde para seleccionar el video principal.
            </p>
        </Col>
        <Col xs={12} md={7}>
          <Ratio aspectRatio="16x9">
            <iframe
              src={getEmbedUrl(mainVideo.url)}
              title="Instagram Reel"
              frameBorder="0"
              allowFullScreen
            />
          </Ratio>
        </Col>
      </Row>

      {/* Lista de Miniaturas */}
      <Row className="mt-4 d-flex overflow-auto">
        {videoList.map((video) => (
          <Col
            key={video.id}
            xs={5}
            md={3}
            lg={3}
            className="p-2"
          >
            <Ratio aspectRatio="16x9">
              <iframe
                src={getEmbedUrl(video.url)}
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
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default VideoThree;
