const express = require("express");
const cors = require("cors");
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();
const fast2sms = require("fast-two-sms");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("HELLo");
});

app.post("/contact", async (req, res) => {
  // console.log(req.body);
  const msg = `Name: ${req.body.name} \nPhoneNo: ${req.body.number} \nEmail: ${req.body.email} \nMessage: ${req.body.message}`;
  console.log(msg);
  var options = {
    authorization: process.env.API_KEY,
    message: msg,
    numbers: ["9467418324"],
  };
  a = await fast2sms.sendMessage(options);

  console.log(a.message);
  res.send(a);
});

app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));
