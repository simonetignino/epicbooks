import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

export default function AllTheBooks(props) {
    console.log(props.books);
  return (
    <Row>
      {props.books.map(book =>(
          <Col>
          <Card style={{ height: '550px', width: '300px', margin:'10px 0'}}>
            <Card.Img variant="top" src={book.img} style={{height: '400px'}} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
            </Card.Body>
          </Card> 
          </Col>
      ))}
    </Row>
  )
}
