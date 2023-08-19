const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    if (!products) {
      return res.status(404).json({ error: "Products not found" });
    }
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getProducts,
};
