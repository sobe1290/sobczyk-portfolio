import React from 'react'
import { ListGroup, Col, Row } from 'react-bootstrap'

function ProfList() {
  return (
    <>
    <Row>
      <Col md={6}>
    <h1 className="headone">Below are some of my Web Development Proficiencies</h1>
    <ListGroup className="d-flex align-items-center p-5">
      <ListGroup.Item className='profLi m-2'>JavaScript</ListGroup.Item>
      <ListGroup.Item className='profLi m-2'>jQuery</ListGroup.Item>
      <ListGroup.Item className='profLi m-2'>MongoDB</ListGroup.Item>
      <ListGroup.Item className='profLi m-2'>React.js</ListGroup.Item>
      <ListGroup.Item className='profLi m-2'>Express.js</ListGroup.Item>
      <ListGroup.Item className='profLi m-2'>MySQL</ListGroup.Item>
      <ListGroup.Item className='profLi m-2'>Handlebars.js</ListGroup.Item>
      <ListGroup.Item className='profLi m-2'>HTML</ListGroup.Item>
      <ListGroup.Item className='profLi m-2'>CSS</ListGroup.Item>
      <ListGroup.Item className='profLi m-2'>Bootstrap</ListGroup.Item>
    </ListGroup>
    </Col>
    <Col md={6}>
    <h1 className="headone">Below are some of my Digital Forensics Proficiencies</h1>
    <ListGroup className="d-flex align-items-center p-5">
      <ListGroup.Item className='profLi m-2'>Magnet Axiom</ListGroup.Item>
      <ListGroup.Item className='profLi m-2'>Cellebrite</ListGroup.Item>
      <ListGroup.Item className='profLi m-2'>Autopsy</ListGroup.Item>
      <ListGroup.Item className='profLi m-2'>X-wayz</ListGroup.Item>
      <ListGroup.Item className='profLi m-2'>FTK Imager</ListGroup.Item>
      <ListGroup.Item className='profLi m-2'>KAPE</ListGroup.Item>
      <ListGroup.Item className='profLi m-2'>DVR Examiner</ListGroup.Item>
      <ListGroup.Item className='profLi m-2'>Volatility</ListGroup.Item>
    </ListGroup>
    </Col>
    </Row>
    
    </>
  )
}

export default ProfList