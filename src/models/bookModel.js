const mongoose  = require("mongoose");

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["AVAILABLE", "BORROWED"],
        },
    },
)
const Book = mongoose.model("Book", bookSchema);
export default Book;