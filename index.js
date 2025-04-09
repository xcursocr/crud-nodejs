import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server runing in the port: ${port}`);
});
