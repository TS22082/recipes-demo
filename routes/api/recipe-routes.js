const express = require("express");
const router = express.Router();
const db = require("../../models/index");

router.get("/all", (req, res) => {
  db.Recipe.findAll({
    include: [db.User]
  }).then(allRecipes => {
    res.send(allRecipes);
  });
});

router.get("/find/:id", (req, res) => {
  db.Recipe.findAll({
    where: { UserId: req.params.id },
    include: [db.User]
  }).then(allRecipes => {
    res.send(allRecipes);
  });
});

router.post("/new", (req, res) => {
  db.Recipe.create({
    text: req.body.text,
    UserId: req.body.userId
  }).then(newRecipe => {
    res.send(newRecipe);
  });
});

module.exports = router;
