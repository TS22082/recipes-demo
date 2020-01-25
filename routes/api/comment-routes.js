const express = require("express");
const router = express.Router();
const db = require("../../models/index");

router.get("/all", (req, res) => {
  db.Comment.findAll({
    include: [db.User]
  }).then(allComments => {
    res.send(allComments);
  });
});

router.get("/find/:recipeId", (req, res) => {
  db.Comment.findAll({
    where: { recipeId: req.params.recipeId },
    include: [db.User]
  }).then(comments => {
    res.send(comments);
  });
});

router.post("/new", (req, res) => {
  db.Comment.create({
    text: req.body.text,
    recipeId: req.body.recipeId,
    UserId: req.body.userId,
    include: [db.User]
  }).then(newComment => {
    res.send(newComment);
  });
});

module.exports = router;
