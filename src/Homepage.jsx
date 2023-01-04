import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <Container className='gap d-g mt mb'>
      <Row md={5} className='gap'>
        <Link className='WH-200 center box-shaodw text-dec' to='day1'>
          <Col className='font-size ft-black'> 1</Col>
        </Link>

        <Col className='WH-200 center'>2 of 30</Col>
        <Col className='WH-200 center '>3 of 30</Col>
        <Col className='WH-200 center '>4 of 30</Col>
        <Col className='WH-200 center '>5 of 30</Col>
      </Row>
      <Row md={5} className='gap'>
        <Col className='WH-200 center '>6 of 30</Col>
        <Col className='WH-200 center '>7 of 30</Col>
        <Col className='WH-200 center '>8 of 30</Col>
        <Col className='WH-200 center '>9 of 30</Col>
        <Col className='WH-200 center '>10 of 30</Col>
      </Row>

      <Row md={5} className='gap'>
        <Col className='WH-200 center '>11 of 30</Col>
        <Col className='WH-200 center '>12 of 30</Col>
        <Col className='WH-200  center'>13 of 30</Col>
        <Col className='WH-200  center'>14 of 30</Col>
        <Col className='WH-200 center '>15 of 30</Col>
      </Row>
      <Row md={5} className='gap'>
        <Col className='WH-200 center '>16 of 30</Col>
        <Col className='WH-200 center '>17 of 30</Col>
        <Col className='WH-200 center '>18 of 30</Col>
        <Col className='WH-200 center '>19 of 30</Col>
        <Col className='WH-200 center '>20 of 30</Col>
      </Row>
      <Row md={5} className='gap'>
        <Col className='WH-200 center '>21 of 30</Col>
        <Col className='WH-200 center '>22 of 30</Col>
        <Col className='WH-200 center '>23 of 30</Col>
        <Col className='WH-200 center '>24 of 30</Col>
        <Col className='WH-200 center '>25 of 30</Col>
      </Row>
      <Row md={5} className='gap'>
        <Col className='WH-200 center '>26 of 30</Col>
        <Col className='WH-200 center '>27 of 30</Col>
        <Col className='WH-200 center '>28 of 30</Col>
        <Col className='WH-200 center '>29 of 30</Col>
        <Col className='WH-200 center '>30 of 30</Col>
      </Row>
    </Container>
  );
};

export default Homepage;
