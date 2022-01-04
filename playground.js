const { User } = require("./models");

User.insertMany([
    {
        userName: "Name",
        profilePic: "Link",
        email: "email@email.com",
        address: "Address",
        phone: 123,
        password: "Password",
        sale: [],
    }
])
    .then((newUser) => {
        console.log(newUser);
    })
    .catch((error) => {
        console.log(error);
    });

User.findOne({ userName: "Name" })
    .then((user) => {
        console.log(user);
        user.sale.push(
            {
                saleName: "saleName",
                location: "location",
                saleImage: "saleImage",
                saleDescription: "saleDescription",
                time: "time",
                date: "date",
                saleTags: "saleTags",
                zipCode: 012345,
                item: [
                    {
                        itemName: "itemName",
                        price: 12,
                        itemDescription: "itemDescription",
                        itemTags: "itemTags",
                        itemImage: "itemImage",
                    }
                ],
            }
        )
        user.save(function (err) {
            if (!err) console.log('Success!');
        });
    })