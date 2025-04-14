const db = require("../config/db");

const addBook = async (bookName, author, coverUrl, sampleUrl) => {
  const query = 'INSERT INTO book (book_name, author, cover_url, sample_url) VALUES (?, ?, ?, ?)';
  try {
    const [result] = await db.query(query, [bookName, author, coverUrl, sampleUrl]);
    return result;
  } catch (err) {
    throw new Error('Error adding book to database');
  }
};

const getAllBooks = async () => {
  const query = 'SELECT * FROM book';
  try {
    const [books] = await db.query(query);
    return books;
  } catch (err) {
    throw new Error('Error fetching books from database');
  }
};

const getBookById = async (bookId) => {
  const query = 'SELECT * FROM book WHERE book_id = ?';
  try {
    const [book] = await db.query(query, [bookId]);
    return book[0];
  } catch (err) {
    throw new Error('Error fetching book from database');
  }
};

// Delete book by ID
const deleteBookById = async (bookId) => {
  const query = 'DELETE FROM book WHERE book_id = ?';
  try {
    const [result] = await db.query(query, [bookId]);
    return result;
  } catch (err) {
    throw new Error('Error deleting book from database');
  }
};

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  deleteBookById
};
