const MemberService = require("../services/memberService");
const memberService = new MemberService();

class MemberController {
  constructor() {}

  // get all books ->
  async getAllBooks(req, res) {
    try {
      const response = await memberService.getAllBooks();
      return res.status(201).json({
        success: true,
        message: "Successfully fetched all Books",
        data: response,
        err: {},
      });
    } catch (error) {}
  }

  // get a book
  async getBook(req, res) {
    try {
      console.log(req.params.id);
      const response = await memberService.getBook(req.params.id);
      return res.status(201).json({
        success: true,
        message: "Successfully fetched a Books",
        data: response,
        err: {},
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // borrow book -->
  async borrowBook(req, res) {
    try {
      // request -> bookid  , userId
      const response = await memberService.borrowBook({
        bookId: req.body.bookId,
        userId: req.body.userId,
      });
      return res.status(201).json({
        success: true,
        message: "Successfully Borrowed a Book",
        data: response,
        err: {},
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async returnBook(req, res) {
    try {
      // request -> bookid  , userId
      const response = await memberService.returnBook({
        bookId: req.body.bookId,
        userId: req.body.userId,
      });
      return res.status(201).json({
        success: true,
        message: "Successfully returned a Book",
        data: response,
        err: {},
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteMember(req, res) {
    try {
      const userId = req.params.id;
      const response = await memberService.deleteMember(userId);
      return res.status(201).json({
        success: true,
        message: "Successfully deleted a Member",
        data: response,
        err: {},
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = MemberController;
