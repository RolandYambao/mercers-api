require("dotenv").config();
const mongoose = require("mongoose");

const { MONGO_URI } = process.env;
const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose
    .connect(MONGO_URI, configOptions)
    .then(() => console.log("MongoDB successfully connected..."))
    .catch((err) => console.log("MongoDB connection error:", err));

const db = mongoose.connection;
db.once("open", () => {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});

db.on("error", () => {
    console.log(`MongoDB Error`);
});

module.exports = {
    User: require("./users"),
};