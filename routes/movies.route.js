import express from "express";
const router = express.Router();

//R-For Read
router.get("/movies", (req, res) => {
  res.send("Get all movies");
});

//C-For Create
router.post("/movies", (req, res) => {
  res.send("Create movies");
});

//U-For Update
router.put("/movies/:id", (req, res) => {
  res.send("updates movies");
});

//D-For Delete
router.delete("/movies/:id", (req, res) => {
  res.send("Delete all movies");
});

export default router;
