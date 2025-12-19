import Router from "express";
import { loginUser } from "../controllers/login.controller.js";

const router = Router();

router.route("/login-user").post(loginUser);

export default router;
