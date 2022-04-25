// const express = require("express");
// const MongoClient = require("mongodb").MongoClient;

// // const response = $.get(`${API_URL}/devices`);
// // console.log(response);

// const API_URL = 'http://localhost:5000/api';
// const app = express();

// app.use(express.json());
// var database;

// app.get(`${API_URL}devices`, (req, res) => {
//     database.collection('grpproject').find({}).toArray((err, result) => {
//         if (err) throw err
//         res.send(result)
//     })

//     console.log(database.collection('grpproject').findne(
//         {
//             $or: [
//                 { "username": "Himanshu" },
//                 { "user": "w@gmail.com" }
//             ]
//         }))

//     database.collection('grpproject').find({}, { projection: { _id: "6234d8e55d19b3fe823453f9" } }).toArray(function (err, result) {
//         if (err) throw err;
//         res.send(result);
//     })
// });

// app.listen(5000, () => {
//     MongoClient.connect('mongodb+srv://epsilon:epsilon@cluster0.t883m.mongodb.net/myFirstDatabase', { useNewUrlParser: true, useUnifiedTopology: true }, (error, result) => {
//         if (error) throw error
//         database = result.db('mydatabase')
//         console.log('Connection Successful')
//     });
// });
