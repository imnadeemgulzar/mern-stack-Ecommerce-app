import {
  loginController,
  registerController,
} from "../controllers/authControllers.js";

import { Router } from "express";

const router = Router();
router.post("/register", registerController);

router.post("/login", loginController);

export default router;
