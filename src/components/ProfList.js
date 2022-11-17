import React from 'react'
import { ListGroup } from 'react-bootstrap'

function ProfList() {
  return (
    <>
    <h1 className="headone">Below are my Dev Proficiencies</h1>
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
    </>
  )
}

export default ProfList