import axios from "../modules/ApiAxios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function AddComment({ elementId, setAdd, add }) {
  const [comments, setComments] = useState({
    comment: "",
    rate: 0,
    elementId: elementId,
  });

  let setCommentsHandler = (e) => {
    setComments({
      ...comments,
      comment: e.target.value,
      elementId: elementId,
    });
  };

  let setRateHandler = (e) => {
    setComments({
      ...comments,
      rate: e.target.value,
      elementId: elementId,
    });
  };

  let sendComment = () => {
    axios.post('/comments/', comments).then(response => {
      setAdd(!add)
      setComments({ comment: "", rate: 0, elementId: elementId });
    }).catch(error => console.error(error))
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <div className="d-flex align-items-center justify-content-between">
          <Form.Label>Review</Form.Label>
          <button
            type="button"
            className="btn btn-secondary p-1 mb-2 bg-transparent text-dark ms-2"
            onClick={sendComment}
          >
            Submit
          </button>
        </div>
        <Form.Control as="textarea" rows={3} onChange={setCommentsHandler} />
      </Form.Group>
      <Form.Select
        aria-label="Default select example"
        onChange={setRateHandler}
      >
        <option>Voto</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="3">4</option>
        <option value="3">5</option>
      </Form.Select>
    </Form>
  );
}
