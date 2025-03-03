const db = require("../config/db");


const addBook = async (bookName, author, coverUrl, sampleUrl) => {
    const query = 'INSERT INTO book (book_name, author, cover_url, sample_url) VALUES (?, ?, ?, ?)';
    const [result] = await db.query(query, [bookName, author, coverUrl, sampleUrl]);
    return result;
};




const getAllBooks = async () => {
    const query = 'SELECT * FROM book';
    const [books] = await db.query(query);
    return books;
};


const getBookById = async (bookId) => {
    const query = 'SELECT * FROM book WHERE book_id = ?';
    const [book] = await db.query(query, [bookId]);
    return book[0];
};

//delete books by id
const deleteBookById= async(bookId)=>
{
    const query=`Delete from book where book_id=?`;
    const [book]= await(db.query(query,[bookId]));
    return book;
}

module.exports = {
    addBook,
    getAllBooks,
    getBookById,
    deleteBookById
};
