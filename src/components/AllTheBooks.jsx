import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

export default function AllTheBooks(props) {
    console.log(props.books);
  return (
    <Row>
      {props.books(book =>(
          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
            </Card.Body>
          </Card> 
          </Col>
      ))}
    </Row>
  )
}
