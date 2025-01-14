require("dotenv").config();
const pLanguage = [];

exports.readData = (req, res) => {
  res.render("index", { pLanguage: pLanguage });
};
exports.contactData = (req, res) => {
  res.render("contact", {});
};

exports.saveData = (req, res) => {
  const pLang = req.body.pLang;
  pLanguage.push(pLang);
  res.redirect("/");
};
