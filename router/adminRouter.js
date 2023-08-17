import express from "express";
import { adminController } from "../controller/adminController.js";

const router = express.Router();

router.post("/register", adminController.register);
router.post("/login", adminController.login);
router.get("/getinfo", adminController.getUser);

export default router;
