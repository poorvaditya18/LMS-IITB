const LibrarianService = require("../services/librarianService");

const librarianService = new LibrarianService();

class LibrarianController {
  constructor() {}

  async getBook(req, res) {
    try {
      const response = await librarianService.get(req.params.id);
      if (!response) {
        return res.status(201).json({
          success: true,
          message: "Book does not exists",
          data: response,
          err: {},
        });
      }
      return res.status(201).json({
        success: true,
        message: "Successfully fetched a Book",
        data: response,
        err: {},
      });
    } catch (error) {
      console.log("Something wrong in controller");
      console.log(error);
      throw error;
    }
  }

  async getAllBooks(req, res) {
    try {
      const response = await librarianService.getAll();
      console.log(response);
      if (!response) {
        return res.status(201).json({
          success: true,
          message: "No Books exist",
          data: response,
          err: {},
        });
      }
      return res.status(201).json({
        success: true,
        message: "Successfully fetched  all Book",
        data: response,
        err: {},
      });
    } catch (error) {
      console.log("Something wrong in controller");
      console.log(error);
      throw error;
    }
  }
  // 1. add Book
  async addBook(req, res) {
    try {
      console.log(req.body);
      const response = await librarianService.addBook(req.body);
      console.log(response);
      return res.status(201).json({
        success: true,
        message: "Successfully created a Book",
        data: response,
        err: {},
      });
    } catch (error) {
      console.log("Something wrong in controller");
      console.log(error);
      throw error;
    }
  }

  // 2. update Book
  async updateBook(req, res) {
    try {
      console.log(req.query.id);
      console.log(req.body);
      const response = await librarianService.updateBook(
        req.query.id,
        req.body
      );
      if (!response) {
        return res.status(201).json({
          success: true,
          message: "Cannot update a Book. Check whether book exists or not ",
          data: response,
          err: {},
        });
      }
      return res.status(201).json({
        success: true,
        message: "Successfully updated a Book",
        data: response,
        err: {},
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // 3. delete Book
  async deleteBook(req, res) {
    try {
      console.log(req.query.id);
      const response = await librarianService.deleteBook(req.query.id);

      if (!response) {
        return res.status(201).json({
          success: true,
          message: "Cannot delete a Book. Check whether book exists or not ",
          data: response,
          err: {},
        });
      }
      return res.status(201).json({
        success: true,
        message: "Successfully deleted a Book",
        data: response,
        err: {},
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // add Member
  async addMember(req, res) {
    try {
      console.log(req.body);
      const response = await librarianService.addUser(req.body);
      return res.status(201).json({
        success: true,
        message: "Successfully create a User",
        data: response,
        err: {},
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //get a member -->
  async getMember(req, res) {
    try {
      console.log(req.body);
      const response = await librarianService.getMember(req.params.id);
      if (!response) {
        return res.status(201).json({
          success: true,
          message: "Not able to fetch a User",
          data: response,
          err: {},
        });
      }
      return res.status(201).json({
        success: true,
        message: "Successfully fetched a User",
        data: response,
        err: {},
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // get all members
  async getAllMember(req, res) {
    try {
      const response = await librarianService.getAllMembers();
      return res.status(201).json({
        success: true,
        message: "Successfully Fetched All Members",
        data: response,
        err: {},
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // update a member -->
  async updateMember(req, res) {
    try {
      const response = await librarianService.updateMember(
        req.query.id,
        req.body
      );
      if (!response) {
        return res.status(201).json({
          success: true,
          message: "Not able to update User",
          data: response,
          err: {},
        });
      }
      return res.status(201).json({
        success: true,
        message: "Successfully Updated User",
        data: response,
        err: {},
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // delete a member ->
  async deleteMember(req, res) {
    try {
      const response = await librarianService.deleteMember(req.params.id);
      if (!response) {
        return res.status(201).json({
          success: true,
          message: "Not able to delete a User",
          data: response,
          err: {},
        });
      }
      return res.status(201).json({
        success: true,
        message: "Successfully deleted  User",
        data: response,
        err: {},
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
module.exports = LibrarianController;
