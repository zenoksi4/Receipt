const Product = require("../models/Product");
const ProductInReceipt = require("../models/ProductInReceipt");
const Receipt = require("../models/Receipt");


const createReceipt = async (req, res) => {
    try {
        const { productId } = req.body;

        const product = await Product.findByPk(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const total = product.price
        const receipt = await Receipt.create({ total });
        res.status(201).json(receipt);

        await ProductInReceipt.create({
            ReceiptId: receipt.id,
            ProductId: product.id,
            quantity: 1,
            price: product.price,
        });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
}

const addProductToReceipt = async (req, res) => {
    try {
      const { receiptId } = req.params;
      const { productId } = req.body;
  
      const receipt = await Receipt.findByPk(receiptId);
      const product = await Product.findByPk(productId);
  
      if (!receipt) {
        return res.status(404).json({ error: 'Receipt not found' });
      }
  
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      const totalPrice = product.price
  
      const productInReceipt = await ProductInReceipt.create({
        ReceiptId: receipt.id,
        ProductId: product.id,
        quantity: 1,
        price: product.price, 
      });
  
      receipt.total += totalPrice;
      await receipt.save();
  
      res.status(201).json(productInReceipt);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

module.exports = {
    createReceipt,
    addProductToReceipt
}