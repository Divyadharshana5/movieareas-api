import express from "express";
import {
  MovieIndex,
  MovieCreate,
  MovieUpdate,
  MovieDelete,
} from "../controllers/movies.controller.js";
const router = express.Router();

//R-For Read
router.get("/", MovieIndex);

router.get("/:id", MovieIndex);

//C-For Create
router.post("/", MovieCreate);

//U-For Update
router.put("/:id", MovieUpdate);

//D-For Delete
router.delete("/:id", MovieDelete);

export default router;
