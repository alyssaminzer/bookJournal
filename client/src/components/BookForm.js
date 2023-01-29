import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate, Link} from "react-router-dom";

const BookForm = (props) => {
    const [errors, setErrors] = useState({});
    const [bookName, setBookName] = useState("");
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState("");
    const [genre, setGenre] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [thoughts, setThoughts] = useState("");
    const [notes, setNotes] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/book", {
            bookName, author, rating, genre, startDate, endDate, thoughts, notes
        })
        .then((res) => {
            console.log(res.data);
                setBookName("");
                setAuthor("");
                setRating("");
                setGenre("");
                setStartDate("");
                setEndDate("");
                setThoughts("");
                setNotes("");
                navigate("/"); 
        })
        .catch((err) => {
            console.log(err);
            console.log(err.response.data.error.errors);
            setErrors(err.response.data.error.errors); // validations
        });
    }

    // form to add new book & validations
    return (
        <div className='wrapper'>
            
            <Link className="btn btn-dark" to={`/`}>Home</Link>
            <h3 className='addbook'>Add a new book to your journal</h3>
            <form onSubmit={submitHandler}>
                <div className='form-fields'>
                    <div className='column1'>
                    <label>Book: </label> 
                    {errors.bookName ? <span>{errors.bookName.message}</span> : null}  <br/>
                    <input
                        onChange={(e) => setBookName(e.target.value)}
                        value={bookName}
                        name="bookName"
                        type="text"
                        /> <br/>
                    <label>Author: </label>
                    {errors.author ? <span>{errors.author.message}</span> : null}  <br/>
                    <input
                        onChange={(e) => setAuthor(e.target.value)}
                        value={author}
                        name="author"
                        type="text"
                        /> <br/>
                        
                    <label>Rating: </label>
                    {errors.rating ? <span>{errors.rating.message}</span> : null}  <br/>
                    <input
                        onChange={(e) => setRating(e.target.value)}
                        value={rating}
                        name="rating"
                        type="number"
                        /> <br/>
                        </div>
                    <div className='column2'>
                    <label>Genre: </label> 
                    {errors.genre ? <span>{errors.genre.message}</span> : null}  <br/>
                    <input
                        onChange={(e) => setGenre(e.target.value)}
                        value={genre}
                        name="genre"
                        type="text"
                        /> <br/>
                    <label>Start Date: </label> 
                    {errors.startDate ? <span>{errors.startDate.message}</span> : null}  <br/>
                    <input
                        onChange={(e) => setStartDate(e.target.value)}
                        value={startDate}
                        name="startDate"
                        type="date"
                        /> <br/>
                    <label>End Date: </label> 
                    {errors.endDate ? <span>{errors.endDate.message}</span> : null}  <br/>
                    <input
                        onChange={(e) => setEndDate(e.target.value)}
                        value={endDate}
                        name="endDate"
                        type="date"
                        /> <br/>
                        <label>Thoughts: </label> 
                        {errors.thoughts ? <span>{errors.thoughts.message}</span> : null}  <br/>
                    <textarea
                        onChange={(e) => setThoughts(e.target.value)}
                        value={thoughts}
                        name="thoughts"
                        type="text"
                        /> <br/>
                        <label>Notes: </label> 
                        {errors.notes ? <span>{errors.notes.message}</span> : null}  <br/>
                    <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        value={notes}
                        name="notes"
                        type="text"
                        /> <br/>
                    </div>
                </div>
                <button className="btn btn-dark" type="submit" value="AddBook">Submit</button>
            </form>
        </div>
    )
}
export default BookForm;