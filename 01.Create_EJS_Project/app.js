const express = require("express");
const app = express();

const appRouters = require("./routes/app.route");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(appRouters);

module.exports = app;
