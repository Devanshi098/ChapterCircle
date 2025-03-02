const express = require("express");
const router = express.Router();
const bookModel = require("../models/bookModel");

// Get All Books
router.get('/', async (req, res) => {
    try {
        const books = await bookModel.getAllBooks();
        res.status(200).json(books);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch books" });
    }
});

// Get Book by ID
router.get('/:bookId', async (req, res) => {
    const { bookId } = req.params;
    try {
        const book = await bookModel.getBookById(bookId);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch book" });
    }
});

module.exports = router;
