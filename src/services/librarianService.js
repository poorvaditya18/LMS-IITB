const LibrarianRepository = require("../repository/librarianRepository");
const UserRepository = require("../repository/userRepository");
const MemberRepository = require("../repository/memberRepository");
class LibrarianService {
  constructor() {
    this.librarianRepository = new LibrarianRepository();
    this.userRepository = new UserRepository();
    this.memberRepository = new MemberRepository();
  }

  // get a book
  async get(bookId) {
    try {
      const book = await this.librarianRepository.get(bookId);
      return book;
    } catch (error) {
      console.log("Something Went wrong on service layer");
      console.log(error);
      throw error;
    }
  }

  // get all books
  async getAll() {
    try {
      const book = await this.librarianRepository.getAll();
      return book;
    } catch (error) {
      console.log("Something Went wrong on service layer");
      console.log(error);
      throw error;
    }
  }

  // validation logic for add Book -->
  async addBook(data) {
    try {
      console.log(data);
      const book = await this.librarianRepository.create(data);
      return book;
    } catch (error) {
      console.log("Something Went wrong on service layer");
      console.log(error);
      throw error;
    }
  }

  // update a book -->
  async updateBook(bookId, data) {
    try {
      console.log(bookId);
      // first check whether book exists in db or not using book id
      const isBookPresent = await this.librarianRepository.find(bookId);
      if (!isBookPresent) {
        return;
      }
      const book = await this.librarianRepository.update(bookId, data);
      return book;
    } catch (error) {
      console.log("Something went wrong on service layer");
      console.log(error);
      throw error;
    }
  }
  // delete a book -->
  async deleteBook(bookId) {
    try {
      console.log(bookId);
      const isBookPresent = await this.librarianRepository.find(bookId);
      if (!isBookPresent) {
        return;
      }
      const book = await this.librarianRepository.delete(bookId);
      return book;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // add user
  async addUser(data) {
    try {
      const user = await this.userRepository.create(data);
      if (user.role == "member") {
        const member = await this.memberRepository.create({ userId: user._id });
      }
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // get a member-->
  async getMember(userId) {
    try {
      const member = await this.memberRepository.getMember(userId);
      return member;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // get all members -->
  async getAllMembers() {
    try {
      const members = await this.memberRepository.getAllMember();
      return members;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // TODO : update a member -->
  async updateMember(userId, data) {
    try {
      console.log(userId, data);
      // data.username , data.borrowBooks , data.returnBooks
      const member = await this.memberRepository.getMember(userId);

      if (data.username !== null) {
        const user = await this.userRepository.get(userId);
        user.username = data.username;
        await user.save();
      }
      // member._id
      if (data.borrowedBooks !== null) {
        data.borrowedBooks.map((item) => {
          if (member.borrowedBooks[item]) {
          }
          member.borrowedBooks.push(item);
        });
        member.borrowedBooks = [...new Set(member.borrowedBooks)];
      }

      if (data.returnedBooks !== null) {
        data.returnedBooks.map((item) => {
          if (member.returnedBooks[item]) {
          }
          member.returnedBooks.push(item);
        });
        member.returnedBooks = [...new Set(member.returnedBooks)];
      }
      // member.returnedBooks
      await member.save();
      return member.populate({ path: "User" });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //delete a member -->
  async deleteMember(userId) {
    try {
      const member = await this.memberRepository.getMember(userId);
      if (member === null) {
        return;
      }
      await this.memberRepository.destroy(member._id.valueOf());
      await this.userRepository.destroy(userId.valueOf());
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
module.exports = LibrarianService;
