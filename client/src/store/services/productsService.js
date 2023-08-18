import axios from 'axios'

const getProducts = async () => {
    const products = await axios.get('http://localhost:5000/api/products');

    return products.data;
}

const productsService = {
    getProducts
}

export default productsService;