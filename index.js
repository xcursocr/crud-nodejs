import express from "express";
import "dotenv/config";
import mainRouter from "./src/routes/main.router.js";

const app = express();
const port = process.env.PORT || 3001;

app.use("/", mainRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
