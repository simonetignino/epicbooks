import axios from "../modules/ApiAxios";
import React from "react";
import { Button, ListGroup } from "react-bootstrap";

export default function SingleComment({ comment, setAdd, add }) {
  //funzione per rimuovere il commento
  const removeComment = (comment) => {
    axios.delete("/comments/" + comment._id).then(response => {
      setAdd(!add);
    }).catch(error => console.error(error))
  };

  return (
    <ListGroup.Item data-testid={comment._id}>
      {comment.comment}
      <Button
        className="float-end"
        variant="outline-danger"
        onClick={() => removeComment(comment)}
      >
        x
      </Button>{" "}
    </ListGroup.Item>
  );
}
