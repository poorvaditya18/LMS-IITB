const express = require("express");
const router = express.Router();
const LibrarianController = require("../../controllers/librarianController");
const { validateAddBook } = require("../../middlewares/validateAddBook");
const { authenticateUser } = require("../../middlewares/authenticate");
const { authorisation } = require("../../middlewares/authorisation");
const validateUser = require("../../middlewares/validateUser");
const librarianController = new LibrarianController();

// LIBRARIAN FOR BOOK ->

router.get(
  "/book/:id",
  [authenticateUser, authorisation],
  librarianController.getBook
);

// get all books ->
router.get(
  "/book",
  [authenticateUser, authorisation],
  librarianController.getAllBooks
);
// add a book -->
router.post(
  "/book",
  [authenticateUser, authorisation, validateAddBook],
  librarianController.addBook
);
// update a book -->
router.patch(
  "/book",
  [authenticateUser, authorisation],
  librarianController.updateBook
);
// delete a book -->
router.delete(
  "/book",
  [authenticateUser, authorisation],
  librarianController.deleteBook
);




// LIBRARIAN FOR MEMBER ACCESS- 

router.post(
  "/add-member",
  [authenticateUser, authorisation, validateUser],
  librarianController.addMember
);

// get all the members
router.get(
  "/get-member",
  [authenticateUser, authorisation],
  librarianController.getAllMember
);

// get a member
router.get(
  "/member/:id",
  [authenticateUser, authorisation],
  librarianController.getMember
);

// update a member
router.patch(
  "/member/:id",
  [authenticateUser, authorisation],
  librarianController.updateMember
);

// delete a member-->
router.delete(
  "/delete-member/:id",
  [authenticateUser, authorisation],
  librarianController.deleteMember
);

module.exports = router;
