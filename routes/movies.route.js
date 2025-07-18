import express from "express";
const router = express.Router();

//R-For Read
router.get("/", MovieIndex);

//C-For Create
router.post("/", MovieCreate);

//U-For Update
router.put("/:id", MovieUpdate);

//D-For Delete
router.delete("/:id", MovieDelete);

export default router;
