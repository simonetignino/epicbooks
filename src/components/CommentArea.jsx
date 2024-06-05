import React, { useEffect, useState } from 'react'
import AddComment from './AddComment';
import CommentList from './CommentList';
import { Alert, Spinner } from 'react-bootstrap';

const url = 'https://striveschool-api.herokuapp.com/api/books/';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNlMzg4ZDcyYjNlYTAwMTU3MWZjZjAiLCJpYXQiOjE3MTczMjAwNzMsImV4cCI6MTcxODUyOTY3M30.ty0tvN0gXJoMaYLILPozIXpd3J4I1Zm_rlf4cL8XTa4'

export default function CommentArea({ asin }) {
    
    const [comments, setComments] = useState([])

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const [add, setAdd] = useState(false); 

    useEffect(() =>{
        setIsLoading(true);
        fetch(url + asin + '/comments/', {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(response => response.json())
            .then((data) =>{
                setComments(data);
                setIsLoading(false);
            })
            .catch(error => {
                setIsError(true)
                setIsLoading(false);
            })
    }, [add, asin]) 

  return (
    <div>
        {isLoading && <div className='text-center my-3'><Spinner className='mx-auto' animation="border" role="status"/></div>}
        {isError && <div className='text-center my-3'><Alert variant={'danger'}>Errore di caricamento</Alert></div>}
        <AddComment elementId={asin} setAdd={setAdd} add={add}/>
        <CommentList comments={comments} setAdd={setAdd} add={add}/>
    </div>
  )
}
