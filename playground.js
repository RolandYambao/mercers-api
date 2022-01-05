const { User } = require("./models");

// User.insertMany([
//     {
//         userName: "Name",
//         profilePic: "Link",
//         email: "email@email.com",
//         address: "Address",
//         phone: 123,
//         password: "Password",
//         sale: [],
//     }
// ])
//     .then((newUser) => {
//         console.log(newUser);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// User.findOne({ userName: "Name" })
//     .then((user) => {
//         console.log(user);
//         user.sale.push(
//             {
//                 saleName: "saleName",
//                 location: "location",
//                 saleImage: "saleImage",
//                 saleDescription: "saleDescription",
//                 time: "time",
//                 date: "date",
//                 saleTags: ["object", "thing"],
//                 zipCode: 012345,
//                 item: [],
//             }
//         )
//         user.save(function (err) {
//             if (!err) console.log('Success!');
//         });
//     })

// User.findOne({ userName: "Name" })
//     .then((user) => {
//         console.log(user.sale[0].item);
//         user.sale[0].item.push(
//             {
//                 itemName: "newItem",
//                 price: 15,
//                 itemDescription: "newDescription",
//                 itemTags: ["stuff", "item"],
//                 itemImage: "newImage",
//             }
//         )
//         user.save(function (err) {
//             if (!err) console.log('Success!');
//         });
//     })

// User.deleteMany({}, function (err) {
//     console.log("Successful Deletion");
// })