import express from "express";
import movieRoutes from "./routes/movies.route.js";
import connectDB from "./lib/db.js";
import dotenv from "dotenv";
const app = express();
const PORT = 5000;

dotenv.config();

//Data parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connect DB
connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "Api is working fine!" });
});

//CRUD functionality of movies
// CLIENT -> MIDDLEWARE -> SERVER
app.use("/movies", movieRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
  });
});

//Dry Principle: Don't Repeat Yourself
//KISS Principle: Keep It Simple, Stupid
