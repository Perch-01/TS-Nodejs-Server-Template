import express from "express";
import { userController } from "../controller";

const router = express.Router();

router.get("/all", userController.allAccess);

export default router;
