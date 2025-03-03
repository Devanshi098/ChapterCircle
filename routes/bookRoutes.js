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

 //add book

 router.post("/addBook", async (req, res) => {
    const { bookName, author, coverUrl, sampleUrl} = req.body;
    try {
        await bookModel.addBook(bookName, author, coverUrl, sampleUrl);
        res.status(201).json({ message: "Book added successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to add book" });
    }
});

router.post("/deleteBook/:bookId", async (req, res) => {
    const { bookId } = req.params;
    try {
        await bookModel.deleteBookById(bookId);
        res.status(201).json({ message: "Book deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to delete book" });
    }
});

module.exports = router;
