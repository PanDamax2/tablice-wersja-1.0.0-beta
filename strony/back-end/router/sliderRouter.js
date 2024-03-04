import express from "express";
import { sliderController } from "../controllers/sliderController.js";

const router = express.Router();

router.get("/", sliderController.index);

router.get("/:id", sliderController.showSlider);

router.post("/", sliderController.create);

router.put("/:id", sliderController.update);

router.delete("/:id", sliderController.delete);

export default router;
