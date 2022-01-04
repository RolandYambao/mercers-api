// our first collection schema
// user schema
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: String,
    profilePic: String,
    email: String,
    address: String,
    phone: Number,
    password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;