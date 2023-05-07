const MemberRepository = require("../repository/memberRepository");
const UserRepository = require("../repository/userRepository");

class MemberService {
  constructor() {
    this.memberRepository = new MemberRepository();
    this.userRepository = new UserRepository();
  }

  //get all books
  async getAllBooks() {
    try {
      const books = await this.memberRepository.getAllBooks();
      return books;
    } catch (error) {
      console.log(error);
      return book;
    }
  }

  // get a book
  async getBook(bookId) {
    try {
      const book = await this.memberRepository.getBook(bookId);
      return book;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //borrowBook
  async borrowBook(data) {
    try {
      const member = await this.memberRepository.getMember(data.userId);
      //   console.log(member);
      const book = await this.memberRepository.getBook(data.bookId);
      //   console.log(book);
      member.borrowedBooks.push(book._id);
      book.status = "BORROWED";
      await book.save();
      await member.save();
      return member;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // return book -->
  async returnBook(data) {
    try {
      const member = await this.memberRepository.getMember(data.userId);
      const book = await this.memberRepository.getBook(data.bookId);
      member.returnedBooks.push(book._id);
      book.status = "AVAILABLE";
      let newborrowBooks = member.borrowedBooks;
      //   console.log(newborrowBooks);
      newborrowBooks = newborrowBooks.filter((bookId) => {
        console.log(bookId);
        console.log(book._id);
        return bookId.valueOf() !== book._id.valueOf();
      });
      console.log(newborrowBooks);
      member.borrowedBooks = newborrowBooks;
      await book.save();
      await member.save();
      return member;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteMember(userId) {
    try {
      const member = await this.memberRepository.getMember(userId);
      console.log(member);
      await this.memberRepository.destroy(member._id);
      await this.userRepository.destroy(userId);
      return member;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
module.exports = MemberService;
