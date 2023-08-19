import axios from "axios";

const proxy = process.env.REACT_APP_PROXY || "http://localhost:5000"

const getProducts = async () => {
  const products = await axios.get(`${proxy}/api/products`);

  return products.data;
};

const productsService = {
  getProducts,
};

export default productsService;
