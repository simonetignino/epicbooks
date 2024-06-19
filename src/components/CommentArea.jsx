import React, { useEffect, useState } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import { Alert, Spinner } from "react-bootstrap";
import axios from "../modules/ApiAxios";


export default function CommentArea({ asin }) {
  const [comments, setComments] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [add, setAdd] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get('/books/' + asin + '/comments/').then(response => {
      setComments(response.data);
      setIsLoading(false);
    }).catch(error => {
      error && setIsError(true);
      setIsLoading(false);
    })
  }, [add, asin]);

  return (
    <div>
      {isLoading && (
        <div className="text-center my-3">
          <Spinner className="mx-auto" animation="border" role="status" />
        </div>
      )}
      {isError && (
        <div className="text-center my-3">
          <Alert variant={"danger"}>Errore di caricamento</Alert>
        </div>
      )}
      <AddComment elementId={asin} setAdd={setAdd} add={add} />
      <CommentList comments={comments} setAdd={setAdd} add={add} />
    </div>
  );
}
