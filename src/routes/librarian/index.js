const express = require("express");
const router = express.Router();
const LibrarianController = require("../../controllers/librarianController");
const { validateAddBook } = require("../../middlewares/validateAddBook");
const validateUser = require("../../middlewares/validateUser");
const librarianController = new LibrarianController();

// get a book ->
router.get("/book/:id", librarianController.getBook);
// get all books ->
router.get("/book", librarianController.getAllBooks);
// add a book -->
router.post("/book", validateAddBook, librarianController.addBook);
// update a book -->
router.patch("/book", librarianController.updateBook);
// delete a book -->
router.delete("/book", librarianController.deleteBook);

// Caution -> role member
//  /addUser --> username --> alredy exists search UserModel and Member --> if not then create username and dummy password .
router.post("/member", validateUser, librarianController.addMember);

// get all the members
router.get("/member", librarianController.getAllMember);

// get a member
router.get("/member/:id", librarianController.getMember);

// update a member
router.patch("/member", librarianController.updateMember);

// delete a member-->
router.delete("/member/:id", librarianController.deleteMember);

module.exports = router;
