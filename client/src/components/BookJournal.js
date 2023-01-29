import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const BookJournal = (props) => {

    const { allBooks, setAllBooks } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/book")
            .then((res) => {
                console.log(res.data);
                setAllBooks(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    })

    // displays all books
    return (
        
            <div className="table table-striped">
                <div className='row'>
                    <div className='clow-8'>
                        {/* <button><Link className="btn" to="https://www.goodreads.com/">Goodreads </Link></button> */}
                        <div className='btn-wrapper'>
                        <Link className="btn btn-dark" to="/books/new">Add A Book </Link>
                        </div>
                        <table className='table'>
                            <thead className='table border'>
                                <tr>
                                    <th scope="col">Book</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    allBooks.map((book, index) => {
                                        return (
                                            <tr key={book._id}>
                                                <td>{book.bookName}</td>
                                                <td>{book.rating}</td>
                                                <td>{book.author}</td>
                                                <div key={index}>
                                                    <Link className="btn btn-dark" to={"/books/" + book._id}> View </Link>
                                                </div>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

    );
}
export default BookJournal;