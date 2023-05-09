const Book = require("../models/bookModel");

class LibrarianRepository {
    
  // get book 
  async get(id) {
    try {
      const result = await Book.findById(id);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }

  // get all books 
  async getAll() {
    try {
      const result = await Book.find({});
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }

  // create a Book in DB
  async create(data) {
    try {
      const res = await Book.create(data);
      return res;
    } catch (error) {
      console.log("Something went wrong in Repository");
      console.log(error);
    }
  }

  // check whether Book is present in DB or not
  async find(id) {
    try {
      const book = await Book.findById(id);
      return book;
    } catch (error) {
      console.log("Something went wrong in Repository");
      console.log(error);
    }
  }

  // update book 
  async update(id, data) {
    try {
      const book = await Book.findByIdAndUpdate(id, data, { new: true });
      return book;
    } catch (error) {
      console.log("Something went wrong in Repository");
      console.log(error);
    }
  }
  // delete book 
  async delete(id) {
    try {
      const book = await Book.findByIdAndDelete(id);
      return book;
    } catch (error) {
      console.log("Something went wrong in Repository");
      console.log(error);
    }
  }
}

module.exports = LibrarianRepository;
