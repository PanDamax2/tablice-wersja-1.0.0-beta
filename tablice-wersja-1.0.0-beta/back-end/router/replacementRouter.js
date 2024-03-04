import express from "express";
import { replacementController } from "../controllers/replacementController.js";

const router = express.Router();

router.get("/", replacementController.index);

router.get("/:id", replacementController.showReplacement);

router.post("/", replacementController.create);

router.put("/:id", replacementController.update);

router.delete("/:id", replacementController.delete);

export default router;
