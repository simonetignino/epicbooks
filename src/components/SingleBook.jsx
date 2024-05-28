import React from 'react'
import { Card, Col } from 'react-bootstrap'

export default function SingleBook({book}) {
  return (
    <Col>
        <Card style={{ height: '550px', width: '300px', margin:'10px 0'}}>
        <Card.Img variant="top" src={book.img} style={{height: '400px'}} />
        <Card.Body>
            <Card.Title>{book.title}</Card.Title>
        </Card.Body>
        </Card> 
    </Col>
  )
}
