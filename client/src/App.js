import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookJournal from './components/BookJournal';
import BookForm from './components/BookForm';
import EditBook from './components/EditBook';
import BookDetails from './components/BookDetails';

function App() {

    const [allBooks, setAllBooks] = useState([]);
    const bookLogo = new URL("./images/book.jpg", import.meta.url)
    const journalLogo = new URL("./images/journal.jpg", import.meta.url)


  return (
    <div className="App">
      {/* <h1>Book Journal</h1> */}
      <div className='main-container'>
      <div className='book-logo'>
        <img src={bookLogo} />
      </div>
      <BrowserRouter>
        <Routes>
        <Route element={<BookJournal allBooks={allBooks} setAllBooks={setAllBooks}/>} path="/" />
        <Route element={<BookForm/>} path="/books/new" />
        <Route element={<EditBook/>} path="/books/:id/edit" />
        <Route element={<BookDetails/>} path="/books/:id" />
        </Routes>
      </BrowserRouter> 
      <div className='journal-logo'>
        <img src={journalLogo} />
      </div>
      </div>
                                
    </div>
  );
}

export default App;
