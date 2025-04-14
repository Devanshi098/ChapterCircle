const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Fetch all books
router.get('/books', bookController.getAllBooks);

// Add a new book
router.post('/books', bookController.createBook);

// Get a book by ID
router.get('/books/:bookId', bookController.getBookById);

// Delete a book by ID
router.delete('/books/:bookId', bookController.deleteBook);



module.exports = router;
