import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";

const EditBook = (props) => {
    const { id } = useParams(); 
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

    // info from the database
    useEffect(() => {
        axios.get('http://localhost:8000/api/book/' + id)
            .then((response) => {
                setBookName(response.data.bookName);
                setAuthor(response.data.author);
                setRating(response.data.rating);
                setGenre(response.data.genre);
                setStartDate(response.data.startDate);
                setEndDate(response.data.endDate);
                setThoughts(response.data.thoughts);
                setNotes(response.data.notes);
            })
            .catch(err => console.log(err))
    }, [id])

    // updates book form
    const updateBook = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/book/' + id, {bookName, author, rating, genre, startDate, endDate, thoughts, notes})
            .then(res => {
                console.log(res);
                navigate("/"); // this will take us back to "/"
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data.error.errors);
                setErrors(err.response.data.error.errors); // validations
            });
    };

    // validations & prepopulated book info for editing
    return (
        <div className='wrapper'>
            
            <Link className="btn btn-dark" to={`/`}>back to home</Link>
            {/* <h4>Edit: {bookName}</h4> */}
            <form onSubmit={updateBook}>
            <div className='column1'>
                <p>
                    <label>Book:</label><br />
                    {errors.bookName ? <span>{errors.bookName.message}</span> : null} 
                    <input type="text" 
                    name="bookName" 
                    value={bookName} 
                    onChange={(e) => { setBookName(e.target.value) }} />
                </p>
                <p>
                    <label>Author:</label><br />
                    {errors.author ? <span>{errors.author.message}</span> : null} 
                    <input type="text" 
                    name="author" 
                    value={author} 
                    onChange={(e) => { setAuthor(e.target.value) }} />
                </p>
                <p>
                    <label>Rating:</label><br />
                    {errors.rating ? <span>{errors.rating.message}</span> : null} 
                    <input type="number" 
                    name="rating" 
                    value={rating} 
                    onChange={(e) => { setRating(e.target.value) }} />
                </p>
                </div>
                <div className='column2'>
                <p>
                    <label>Genre:</label><br />
                    {errors.genre ? <span>{errors.genre.message}</span> : null} 
                    <input type="text" 
                    name="genre" 
                    value={genre} 
                    onChange={(e) => { setGenre(e.target.value) }} />
                </p>
                <p>
                    <label>Start Date:</label><br />
                    {errors.startDate ? <span>{errors.startDate.message}</span> : null} 
                    <input type="date" 
                    name="startDate" 
                    value={startDate} 
                    onChange={(e) => { setStartDate(e.target.value) }} />
                </p>
                <p>
                    <label>End Date:</label><br />
                    {errors.endDate ? <span>{errors.endDate.message}</span> : null} 
                    <input type="date" 
                    name="endDate" 
                    value={endDate} 
                    onChange={(e) => { setEndDate(e.target.value) }} />
                </p>
                <p>
                    <label>Thoughts:</label><br />
                    {errors.thoughts ? <span>{errors.thoughts.message}</span> : null} 
                    <textarea type="text" 
                    name="thoughts" 
                    value={thoughts} 
                    onChange={(e) => { setThoughts(e.target.value) }} />
                </p>
                <p>
                    <label>Notes:</label><br />
                    {errors.notes ? <span>{errors.notes.message}</span> : null} 
                    <textarea type="text" 
                    name="notes" 
                    value={notes} 
                    onChange={(e) => { setNotes(e.target.value) }} />
                </p>
                </div> <br/>
                <button className="btn btn-dark" type="submit" value="UpdateBook">Update</button> 
            </form>
        </div>
    )
}
export default EditBook;