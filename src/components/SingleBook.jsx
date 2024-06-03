import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import CommentArea from './CommentArea';

export default function SingleBook({book}) {
  
  const [selected, setSelected] = useState(false);

  return (
    <Col>
        <Card style={{ height: '550px', width: '300px', margin:'10px 0', border: selected ? '2px solid red' : '1px solid #CBC9C9'}} onClick={() => setSelected(!selected)}>
        <Card.Img variant="top" src={book.img} style={{height: '400px'}} />
        <Card.Body>
            <Card.Title>{book.title}</Card.Title>
        </Card.Body>
        </Card> 
        {selected && <CommentArea asin={book.asin}/>}
    </Col>
  )
}
