import { Router } from "express";
import data from "../../data.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello world !!!");
});
router.get("/json", (req, res) => {
  res.json({ data });
});

export default router;
