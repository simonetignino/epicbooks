import React, { useEffect, useState } from 'react'
import AddComment from './AddComment';
import CommentList from './CommentList';

const url = 'https://striveschool-api.herokuapp.com/api/books/';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNlMzg4ZDcyYjNlYTAwMTU3MWZjZjAiLCJpYXQiOjE3MTczMjAwNzMsImV4cCI6MTcxODUyOTY3M30.ty0tvN0gXJoMaYLILPozIXpd3J4I1Zm_rlf4cL8XTa4'

export default function CommentArea({ asin }) {
    
    const [comments, setComments] = useState([])

    useEffect(() =>{
        fetch(url + asin + '/comments/', {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(response => response.json())
            .then(data => setComments(data))
    }, []) 

  return (
    <div>
        <AddComment/>
        <CommentList comments={comments}/>
    </div>
  )
}
