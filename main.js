import express from "express";
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello Students!" });
});

//CRUD functionality of movies

//R-For Read
app.get("/movies", () => {
  res.json({ msg: "List of movies" });
});

//C-For Create
app.post("/movies", () => {});

//U-For Update
app.put("/movies/:id", () => {});

app.listen(5000, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});

//Dry Principle: Don't Repeat Yourself
//KISS Principle: Keep It Simple, Stupid
