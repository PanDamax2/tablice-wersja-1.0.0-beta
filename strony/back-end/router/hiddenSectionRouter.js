import express from "express";
import { hiddenSectionController } from "../controllers/hiddenSectionController.js";

const router = express.Router();

router.get("/", hiddenSectionController.index);

router.get("/:id", hiddenSectionController.showHiddenSection);

router.post("/", hiddenSectionController.create);

router.put("/:id", hiddenSectionController.update);

router.delete("/:id", hiddenSectionController.delete);

export default router;
