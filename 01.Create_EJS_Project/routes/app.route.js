const express = require("express");
const {
  readData,
  saveData,
  contactData,
} = require("../controller/app.controller");
const route = express.Router();

route.get("/", readData);
route.get("/contact", contactData);

route.post("/", saveData);

module.exports = route;
