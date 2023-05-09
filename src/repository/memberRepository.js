const Book = require("../models/bookModel");
const Member = require("../models/memberModel");

class MemberRepository {
  // create member
  async create(data) {
    try {
      const result = await Member.create(data);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //get member
  async getMember(data) {
    try {
      const result = await Member.findOne({ userId: data });
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // get all members
  async getAllMember() {
    try {
      const result = await Member.find({});
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // get book
  async getBook(bookId) {
    try {
      const result = await Book.findById(bookId);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // get all books
  async getAllBooks() {
    try {
      const result = await Book.find({});
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }

  // find book
  async findBy(data) {
    try {
      const response = await Book.findOne(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  // delete a member
  async destroy(memberId) {
    try {
      const response = await Member.findByIdAndDelete(memberId);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = MemberRepository;
