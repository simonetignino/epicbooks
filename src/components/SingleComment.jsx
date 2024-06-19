import axios from "../modules/ApiAxios";
import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const url = "https://striveschool-api.herokuapp.com/api/comments/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNlMzg4ZDcyYjNlYTAwMTU3MWZjZjAiLCJpYXQiOjE3MTczMjAwNzMsImV4cCI6MTcxODUyOTY3M30.ty0tvN0gXJoMaYLILPozIXpd3J4I1Zm_rlf4cL8XTa4";

export default function SingleComment({ comment, setAdd, add }) {
  //funzione per rimuovere il commento
  const removeComment = (comment) => {
    // console.log(comment);
    // fetch(url + comment._id, {
    //   method: "DELETE",
    //   headers: { Authorization: `Bearer ${token}` },
    // })
    //   .then((response) => response.json())
    //   .then((data) => setAdd(!add));
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
