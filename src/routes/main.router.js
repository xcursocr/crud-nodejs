import { Router } from "express";
import { getProducts, Home } from "../controllers/main.controller.js";

const router = Router();

router.get("/", Home);
router.get("/json", getProducts);

export default router;
