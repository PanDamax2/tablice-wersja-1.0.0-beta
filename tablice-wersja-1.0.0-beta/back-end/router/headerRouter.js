import express from "express";
import { headerController } from "../controllers/headerController.js";

const router = express.Router();

router.get("/", headerController.index);

router.get("/:id", headerController.showHeader);

router.post("/", headerController.create);

router.put("/:id", headerController.update);

router.delete("/:id", headerController.delete);

export default router;
