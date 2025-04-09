import data from "../../data.js";

const Home = (req, res) => {
  res.send("Hello world !!!");
};

const getProducts = (req, res) => {
  res.json({ data });
};

export { Home, getProducts };
