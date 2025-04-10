import express from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import mainRouter from "./src/routes/main.router.js";

const app = express();
const port = process.env.PORT || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use("/", mainRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
