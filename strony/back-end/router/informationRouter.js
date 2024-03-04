import express from "express";
import { informationController } from "../controllers/informationController.js";

const router = express.Router();

router.get("/", informationController.index);

router.get("/:id", informationController.showInformation);

router.post("/", informationController.create);

router.put("/:id", informationController.update);

router.delete("/:id", informationController.delete);

export default router;
