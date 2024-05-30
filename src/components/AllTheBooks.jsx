import React, { useState } from 'react'
import { Form, InputGroup, Row } from 'react-bootstrap';
import SingleBook from './SingleBook';

export default function AllTheBooks(props) {

  const [search, setSearch] = useState('');
  return (
    <Row>
      <Form.Group className='m-3'>
        <Form.Control 
          type='search'
          placeholder='Cerca un libro...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form.Group>
      {props.books
      .filter(book => book.title.toLowerCase().includes(search))
      .map(book => <SingleBook book={book} />)}
    </Row>
  )
}
