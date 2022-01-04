// our first collection schema
// user schema
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    itemName: String,
    price: Number,
    itemDescription: String,
    itemTags: String,
    itemImage: String,
});

const saleSchema = new mongoose.Schema({
    saleName: String,
    location: String,
    saleImage: String,
    saleDescription: String,
    time: String,
    date: String,
    saleTags: String,
    zipCode: Number,
    item: [itemSchema],
});

const userSchema = new mongoose.Schema({
    userName: String,
    profilePic: String,
    email: String,
    address: String,
    phone: Number,
    password: String,
    sale: [saleSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;