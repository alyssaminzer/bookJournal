const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    bookName: { 
    type: String,
        required:  [ true, " Book name is required" ],
        minLength: [ 3, " Book name must be atleast 3 characters" ],}, 
    author: { type: String,
        required:  [ true, " Author is required" ],
        minLength: [ 3, " Author must be atleast 3 characters" ]},
    rating: { type: Number, 
        required:  [ true, " Rating is required" ]},
    genre: { type: String,
        required:  [ true, " Genre is required" ]},
    startDate: { type: String,
        required:  [ true, " Date is required" ] },
    endDate: { type: String,
        required:  [ true, " Date is required" ] },
    thoughts: { type: String,
        required:  [ true, " Thoughts are required" ] },
    notes: { type: String,
        required:  [ true, " Notes are required" ] }
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);