import React from 'react'
import { Container, Row, Col, Ratio } from 'react-bootstrap';
import Facebook from './Facebook';

const VideoThree = () => {

  return (
    <Container>
    <Row className="featurette">
      <Col xs={12} md={6} className='order-md-2'>
        <h2 className="featurette-heading fw-normal lh-1">
          Este seria un apartado de video.
        </h2>
        <p className="lead">
          Algun video de YouTube que pueda describir y llamar la atencion del
          cliente con la publicacion acerca de las cabañitas.
        </p>
      </Col>
      <Col xs={12} md={6}>
        <Facebook/>
      </Col>
    </Row>
  </Container>
  )
}

export default VideoThree