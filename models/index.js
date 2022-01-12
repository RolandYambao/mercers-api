require('dotenv').config();
const mongoose = require('mongoose');

let connectionString;

if (process.env.NODE_ENV === 'production') {
    connectionString = process.env.DB_URL;
} else {
    connectionString = process.env.MONGO_URI
}

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
    console.log(`connected to MongoDB on ${db.host}:${db.port}`);
});

db.on('error', (error) => {
    console.log('Database error', error);
});

// Import models here
const User = require('./users');

module.exports = {
    User: require("./users"),
};

// require("dotenv").config();
// const mongoose = require("mongoose");

// const { MONGO_URI } = process.env;
// const configOptions = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// };

// mongoose
//     .connect(MONGO_URI, configOptions)
//     .then(() => console.log("MongoDB successfully connected..."))
//     .catch((err) => console.log("MongoDB connection error:", err));

// const db = mongoose.connection;
// db.once("open", () => {
//     console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
// });

// db.on("error", () => {
//     console.log(`MongoDB Error`);
// });

// module.exports = {
//     User: require("./users"),
// };