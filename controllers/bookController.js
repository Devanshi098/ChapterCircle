const bookModel = require('../models/bookModel'); // Ensure this path is correct

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).send({ error: 'Failed to retrieve books', details: err.message });
  }
};

// Create a new book
exports.createBook = async (req, res) => {
  const { book_name, author, cover_url, sample_url } = req.body;

  // Simple input validation
  if (!book_name || !author || !cover_url || !sample_url) {
    return res.status(400).send({ error: 'All fields are required' });
  }

  try {
    const result = await bookModel.addBook(book_name, author, cover_url, sample_url);
    res.status(201).send({ message: 'Book added successfully!', bookId: result.insertId });
  } catch (err) {
    res.status(500).send({ error: 'Failed to add book', details: err.message });
  }
};

// Get a single book by ID
exports.getBookById = async (req, res) => {
  const bookId = req.params.bookId;

  try {
    const book = await bookModel.getBookById(bookId);
    if (!book) {
      return res.status(404).send({ error: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).send({ error: 'Failed to retrieve book', details: err.message });
  }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
  const bookId = req.params.bookId;

  try {
    const result = await bookModel.deleteBookById(bookId);
    if (result.affectedRows === 0) {
      return res.status(404).send({ error: 'Book not found' });
    }
    res.status(200).send({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).send({ error: 'Failed to delete book', details: err.message });
  }
};

