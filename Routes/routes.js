const express = require("express");
const router = express.Router();
const { GetMongoDB } = require("../MongoDB_Con/connection");

// DB instance
const db = GetMongoDB();

// Home route
router.get("/", async (req, res) => {
  res.send("Running on port 4000");
});

// Get Books Route
router.get("/books", async (req, res) => {
  let books = [];
  db.collection("books")
    .find()
    .forEach((book) => books.push(book))
    .then(() => {
      res.status(200).json(books);
    })
    .catch((error) => {
      res.status(500).json({ error: "Could not fetch the documents" });
    });
});

module.exports = router;
