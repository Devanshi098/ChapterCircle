const mysql= require("mysql2/promise");
const db= require("./config/db");

const express= require("express");
const app= express();

app.use(express.json());



const cors = require('cors');
app.use(cors());

// Import Routes
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const clubRoutes = require('./routes/clubRoutes');
const clubMemberRoutes = require('./routes/clubmemberRoutes');

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/clubs', clubRoutes);
app.use('/api/members', clubMemberRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to ChapterCircle!");
});

//listen

const port= 8080;
app.listen(port,()=>
{
    console.log(`Server is running on port ${port}`);
})