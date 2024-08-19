const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {console.log('Connected to MongoDB')})
.catch(err => {console.log(`Error connecting to database: ${err}`)});


//view engines
app.set('view engine', 'ejs');
app.set('views', './views');

//middleware
app.use(express.static('public'));

app.use((err, res, req, next) =>{
    console.error(err.stack);
    res.status(500).send('Internal server error');
    next();
});

//start server
app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`);
});


