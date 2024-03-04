import express from "express";
import { classroomController } from "../controllers/classroomController.js";

const router = express.Router();

router.get("/", classroomController.index);

router.get("/:id", classroomController.showClassroom);

router.post("/", classroomController.create);

router.put("/:id", classroomController.update);

router.delete("/:id", classroomController.delete);

export default router;
