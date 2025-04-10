import data from "../../data.js";

const Home = (req, res) => {
  res.render("home", {
    title: "Home Page",
  });
};

const getProducts = (req, res) => {
  res.json({ data });
};

export { Home, getProducts };
