import express from "express";
const router = express.Router();

//R-For Read
router.get("/", (req, res) => {
  res.send("Get all movies");
});

//C-For Create
router.post("/", (req, res) => {
  res.send("Create movies");
});

//U-For Update
router.put("/:id", (req, res) => {
  res.send("updates movies");
});

//D-For Delete
router.delete("/:id", (req, res) => {
  res.send("Delete all movies");
});

export default router;
