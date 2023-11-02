const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
       required: true
    },
    // image: {
    //     type: String,
    //     required: true
    // }
});

const Post = mongoose.model("arya", postSchema);

module.exports = Post;
