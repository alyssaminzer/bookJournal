// imports
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000

app.use(cors());
app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));   
require('./config/mongoose.config');  
require('./routes/book.routes')(app);

app.listen(PORT,()=>{
    console.log('Server is up and running on port ${PORT}')
})