const Book = require('../models/book.model'); 

module.exports.index = (req, res) => {
    res.json({
        message: "This is the back end"
    });
}

// function to create an book & export
module.exports.createBook = (req, res) => {
    const { bookName, author, rating, genre, startDate, endDate, thoughts, notes } = req.body;
    Book.create({ bookName, author, rating, genre, startDate, endDate, thoughts, notes }) 
        .then(book => res.json(book))
        .catch(err => res.status(400).json({ message: "Oh no! Something went wrong!", error: err }));
}

// function to find all books & export
module.exports.getAllBooks = (req, res) => {
    Book.find({})
        .then(books => {
            console.log(books);
            res.json(books);
        })
        .catch(err => {
            console.log(err)
            .catch(err => res.status(400).json({ message: "Oh no! Something went wrong!", error: err }));
        })
}

// function to view an book & export
module.exports.getBook = (req, res) => {
    Book.findOne({_id:req.params.id})
        .then(book => res.json(book))
        .catch(err => res.status(400).json({ message: "Oh no! Something went wrong!", error: err }));
}

// function to edit an book & export
module.exports.updateBook = (req, res) => {
    Book.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true})
        .then(updatedBook => res.json(updatedBook))
        .catch(err => res.status(400).json({ message: "Oh no! Something went wrong!", error: err }));
}

// function to delete an book & export
module.exports.deleteBook = (req, res) => {
    Book.deleteOne({ _id: req.params.id }) 
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json({ message: "Oh no! Something went wrong!", error: err }));
}