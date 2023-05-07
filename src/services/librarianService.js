const LibrarianRepository = require("../repository/librarianRepository");
const UserRepository = require("../repository/userRepository");

class LibrarianService {
  constructor() {
    this.librarianRepository = new LibrarianRepository();
    this.userRepository = new UserRepository();
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
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // get a member-->
  async getMember(userId) {
    try {
      const user = await this.userRepository.get(userId);
      if (user.role != "member") {
        return;
      }
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // get all members -->
  async getAllMembers() {
    try {
      const allUsers = await this.userRepository.getAll();
      const members = allUsers.filter((user) => {
        return user.role == "member";
      });
      return members;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // update a member -->
  async updateMember(userId, data) {
    try {
      let user = await this.userRepository.get(userId);
      if (!user && user.role != "member") {
        return;
      }
      user = await this.userRepository.update(userId, data);
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //delete a member -->
  async deleteMember(userId) {
    try {
      let user = await this.userRepository.get(userId);
      if (!user && user.role != "member") {
        return;
      }
      user = await this.userRepository.destroy(userId);
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
module.exports = LibrarianService;
