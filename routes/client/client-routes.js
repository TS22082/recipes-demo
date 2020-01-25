const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/home.html"));
});

router.get("/recipes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/recipes.html"));
});

router.get("/comments", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/comments.html"));
});

module.exports = router;
