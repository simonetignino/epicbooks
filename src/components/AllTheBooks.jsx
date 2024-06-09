import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import SingleBook from "./SingleBook";

export default function AllTheBooks(props) {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <Row>
        <Col md={9}>
          <Row>
            {props.books
              .filter((book) =>
                book.title.toLowerCase().includes(props.searchQuery),
              )
              .map((book) => (
                <SingleBook
                  key={book.asin}
                  book={book}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
          </Row>
        </Col>
        <Col md={3}>
          <CommentArea asin={selected} />
        </Col>
      </Row>
    </>
  );
}
