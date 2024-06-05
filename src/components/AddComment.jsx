import React, { useState } from 'react'
import { Form } from 'react-bootstrap';

const url = 'https://striveschool-api.herokuapp.com/api/comments/';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNlMzg4ZDcyYjNlYTAwMTU3MWZjZjAiLCJpYXQiOjE3MTczMjAwNzMsImV4cCI6MTcxODUyOTY3M30.ty0tvN0gXJoMaYLILPozIXpd3J4I1Zm_rlf4cL8XTa4'

export default function AddComment({elementId, setAdd, add}) {
   
    const [comments, setComments] = useState({comment: '', rate: 0, elementId: elementId})  

    let setCommentsHandler = (e) => {
        setComments({
            ...comments, 
            comment: e.target.value
        })
    }

    let setRateHandler = (e) => {
        setComments({
            ...comments, 
            rate: e.target.value
        })
    }

    let sendComment = () => {
        // event.preventDefault();
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(comments),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(response => response.json()).then((data) => {
            // console.log(data)
            setComments({comment: '', rate: 0, elementId: elementId})
            setAdd(!add)
        }).catch((error) => console.error(error))
    }

    return (
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <div className='d-flex align-items-center justify-content-between'>
                <Form.Label>Review</Form.Label>
                <button type='button' className='btn btn-secondary p-1 mb-2 bg-transparent text-dark ms-2'onClick={sendComment}>Submit</button>
            </div>
            <Form.Control as="textarea" rows={3} onChange={setCommentsHandler} />
        </Form.Group>
            <Form.Select aria-label="Default select example" onChange={setRateHandler}>
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
