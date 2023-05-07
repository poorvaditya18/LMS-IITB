const express = require("express");
const MemberController = require("../../controllers/memberController");
const memberController = new MemberController();
const router = express.Router();

// view --> get All books which are available in DB
router.get("/books", memberController.getAllBooks);

router.get("/book/:id", memberController.getBook);
// borrow -> whicever book is borrowed change its status to "Borrowed" , update borrow array for member
router.post("/books-borrow", memberController.borrowBook);

// return --> book is returned mark its status as "available", add to returnedBooks array for member.
router.post("/books-return", memberController.returnBook);

// delete user account
router.delete("/delete-member/:id", memberController.deleteMember);

module.exports = router;
