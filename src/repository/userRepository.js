const User = require("../models/userModel");

class UserRepository {
  // create user -->
  async create(data) {
    try {
      const result = await User.create(data);
      return result;
    } catch (error) {
      console.log("Something Went wrong in crud repo ");
      throw error;
    }
  }

  // get a particular user -->
  async get(id) {
    try {
      const result = await User.findById(id);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }

  // get all users -->
  async getAll() {
    try {
      const result = await User.find({});
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }

  // update user -->
  async update(id, data) {
    try {
      const result = await User.findByIdAndUpdate(id, data, {
        new: true,
      });
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }
  // delete user ->
  async destroy(id) {
    try {
      const result = await User.findByIdAndDelete(id);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }
  //findBy
  async findBy(data) {
    try {
      const response = await User.findOne(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserRepository;
