const express = require("express");
const MemberController = require("../../controllers/memberController");
const { authenticateUser } = require("../../middlewares/authenticate");
const { authorisationMember } = require("../../middlewares/authorisation");
const memberController = new MemberController();
const router = express.Router();

router.get(
  "/books",
  [authenticateUser, authorisationMember],
  memberController.getAllBooks
);

router.get(
  "/book/:id",
  [authenticateUser, authorisationMember],
  memberController.getBook
);

router.post(
  "/books-borrow",
  [authenticateUser, authorisationMember],
  memberController.borrowBook
);

router.post(
  "/books-return",
  [authenticateUser, authorisationMember],
  memberController.returnBook
);

router.delete(
  "/delete-member/:id",
  [authenticateUser, authorisationMember],
  memberController.deleteMember
);

module.exports = router;
