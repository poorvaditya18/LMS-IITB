const mongoose  = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        enum: ["librarian", "member"],
    },
});

const User = mongoose.model("User", userSchema);
export default User;