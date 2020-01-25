const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./client"));

const clientRoutes = require("./routes/client/client-routes");
app.use("/", clientRoutes);

const userRoutes = require("./routes/api/user-routes");
app.use("/api/users", userRoutes);

const recipeRoutes = require("./routes/api/recipe-routes");
app.use("/api/recipes", recipeRoutes);

const commentRoutes = require("./routes/api/comment-routes");
app.use("/api/comments", commentRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
  });
});
