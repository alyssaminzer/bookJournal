import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate, Link} from "react-router-dom";

const BookDetails = (props) => {

    const [Book, setBook] = useState({})
    const {id} = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/book/" + id)
            .then( res => {
                console.log(res.data);
                setBook(res.data);
            })
            .catch( err => console.log(err) );
    }, );

    // deletes book from db & returns you back to home page
    const deleteBook = () => {
        axios.delete('http://localhost:8000/api/book/' + id)
            .then(res => {
                console.log(res.data)
                navigate("/")
            })
            .catch(err => console.log(err))
    }
    

    // displays book info
    return (
        <div className='wrapper'>
        <div>
            {/* <h3>Book Name: {Book.bookName}</h3> */}
            <div className='btn-wrapper'>
            <button  className="btn btn-dark" onClick={(e)=>{deleteBook(Book._id)}}>Delete</button> 
            <Link  className="btn btn-dark" to={"/books/" + Book._id + "/edit/"}> Edit </Link>
            <Link  className="btn btn-dark" to={`/`}>Home</Link>
            </div>
            <div className='info'>
            <h5>Book: <p>{Book.bookName}</p></h5> 
            <h5>Author: <p>{Book.author}</p></h5> 
            <h5>Rating: <p>{Book.rating}</p></h5> 
            <h5>Genre: <p>{Book.genre}</p></h5>  
            <h5>Start Date: <p>{Book.startDate}</p></h5>  
            <h5>End Date: <p>{Book.endDate}</p></h5>  
            <h5>Thoughts: <p>{Book.thoughts}</p></h5>  
            <h5>Notes: <p>{Book.notes}</p></h5>  
            </div>
        </div>
        </div>
    );
}
export default BookDetails;