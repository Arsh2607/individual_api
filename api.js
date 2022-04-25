const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Arshdeep:arsh@cluster0.x7ade.mongodb.net/myFirstDatabase",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const express = require("express");
const Device = require("./models/device");

const app = express();

const bodyParser = require("body-parser");
const { $where } = require("./models/device");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const port = 6017;
app.get("http://localhost:6017/api/devices", (req, res) => {
  res.send("The API is working!");
});

app.get("/api/devices", (req, res) => {
  Device.find({}, (err, devices) => {
    return err ? res.send(err) : res.send(devices);
  });
});

app.post("/api/devices", (req, res) => {
  const { user, name, username } = req.body;
  console.log(req.body.user);
  const newDevice = new Device({
    user,
    name,
    username,
  });
  newDevice.save((err) => {
    return err ? res.send(err) : res.send("successfully added device and data");
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
