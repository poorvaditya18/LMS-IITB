const  mongoose  = require("mongoose");

const memberSchema = mongoose.Schema(
    {
        userId: {
            ref: "User",
        },
        //array of book ids
        borrowedBooks: [
            {
                ref: "Book",
            },
        ],
        returnedBooks: [
            {
                ref: "Book",
            },
        ]
    }
)

const Member = mongoose.model("Member", memberSchema);
export default Member;