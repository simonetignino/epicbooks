import React, { useContext } from "react";
import { Card, Col } from "react-bootstrap";
import { ThemeContext } from "../modules/Context";

export default function SingleBook({ book, selected, setSelected }) {
  let [themeCtx, setThemeCtx] = useContext(ThemeContext);

  // const [selected, setSelected] = useState(false);

  return (
    <Col>
      <Card
        bg={themeCtx}
        data-bs-theme={themeCtx}
        style={{
          height: "550px",
          width: "300px",
          margin: "10px 0",
          border:
            selected === book.asin ? "2px solid red" : "1px solid #CBC9C9",
        }}
        onClick={() => setSelected(book.asin)}
      >
        <Card.Img variant="top" src={book.img} style={{ height: "400px" }} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      {/* {selected && <CommentArea asin={book.asin} />} */}
    </Col>
  );
}
