// our first collection schema
// item schema
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    itemName: String,
    price: Number,
    itemDescription: String,
    tags: String,
    imageUrl: String,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;