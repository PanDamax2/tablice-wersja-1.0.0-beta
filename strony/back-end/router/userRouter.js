import express from "express";
import { userController } from "../controllers/userController.js";

const router = express.Router();

router.get("/", userController.index);

router.get("/:id", userController.showUser);

router.post("/", userController.create);

router.post("/login", userController.login);

router.put("/:id", userController.update);

router.delete("/:id", userController.delete);

export default router;
