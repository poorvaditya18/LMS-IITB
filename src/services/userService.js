const UserRepository = require("../repository/userRepository");
const MemberRepository = require("../repository/memberRepository");
class UserService {
  constructor() {
    this.userRepository = new UserRepository();
    this.memberRepository = new MemberRepository();
  }

  // signup
  async signup(data) {
    try {
      console.log(data); // role =="member"
      const user = await this.userRepository.create(data);
      if (user.role == "member") {
        const member = await this.memberRepository.create({ userId: user._id });
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  // get user by
  async getUserByUsername(username) {
    try {
      const user = await this.userRepository.findBy({ username });
      return user;
    } catch (error) {
      throw error;
    }
  }

  // signIn
  async signin(data) {
    try {
      //get user by username
      const user = await this.getUserByUsername(data.username);
      if (!user) {
        throw {
          message: "No User Found",
        };
      }
      if (!user.comparePassword(data.password)) {
        throw {
          message: "Incorrect Password",
        };
      }
      const token = user.generateJWT();
      return token;
    } catch (error) {
      throw error;
    }
  }

  async getAllUsers() {
    try {
      const users = await this.userRepository.getAll();
      return users;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = UserService;
