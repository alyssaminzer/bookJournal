const BookController = require('../controllers/book.controller');

module.exports = (app) => {
    // app.get('/api', BookController.index);
    app.post('/api/book', BookController.createBook); // create
    app.get('/api/book', BookController.getAllBooks); // view all
    app.get('/api/book/:id', BookController.getBook); // view
    app.put('/api/book/:id', BookController.updateBook); // edit
    app.delete('/api/book/:id', BookController.deleteBook); // delete 
}