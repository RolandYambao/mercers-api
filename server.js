const express = require("express");
const { User } = require('./models');
const { Sale } = require('./models');
const { Item } = require('./models');
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());

app.get("/users", async (request, response) => {
    try {
        const userArray = await User.find({});
        response.json({ userArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/sales", async (request, response) => {
    try {
        const saleArray = await Sale.find({});
        response.json({ saleArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/items", async (request, response) => {
    try {
        const itemArray = await Item.find({});
        response.json({ itemArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});