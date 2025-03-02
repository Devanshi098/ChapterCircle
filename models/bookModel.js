const db= require("../config/db");

const getallbooks= async()=>
{
    const query= `select * from books`;
    const [rows]= await db.query(query);
    const db = require("../config/db");

    // Add a New Book
    const addBook = async (bookName, author, coverUrl, sampleUrl) => {
        const query = 'INSERT INTO book (book_name, author, cover_url, sample_url) VALUES (?, ?, ?, ?)';
        const [result] = await db.query(query, [bookName, author, coverUrl, sampleUrl]);
        return result;
    };
    
    // Get All Books
    const getAllBooks = async () => {
        const query = 'SELECT * FROM book';
        const [books] = await db.query(query);
        return books;
    };
    
    // Get Book by ID
    const getBookById = async (bookId) => {
        const query = 'SELECT * FROM book WHERE book_id = ?';
        const [book] = await db.query(query, [bookId]);
        return book[0];
    };
    
    module.exports = {
        addBook,
        getAllBooks,
        getBookById
    };
    
    return [rows];
};

const getbookdetailsbyid= async(book_id)=>
{
    const query = `select * from books where book_id=?`;
    const [rows]= db.query(query,[book_id]);
    return rows[0];
};

module.exports={
    getallbooks,
    getbookdetailsbyid
};