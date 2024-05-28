import React from 'react'
import { Row } from 'react-bootstrap';
import SingleBook from './SingleBook';

export default function AllTheBooks(props) {
    console.log(props.books);
  return (
    <Row>
      {props.books.map(book => <SingleBook book={book} />)}
    </Row>
  )
}
