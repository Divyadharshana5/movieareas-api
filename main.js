import express from "express";
import movieRoutes from "./routes/movies.route.js";
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello Students!" });
});

//CRUD functionality of movies
// CLIENT -> MIDDLEWARE -> SERVER
app.use("/movies", movieRoutes);

app.listen(5000, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});

//Dry Principle: Don't Repeat Yourself
//KISS Principle: Keep It Simple, Stupid
