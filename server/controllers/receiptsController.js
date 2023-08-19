const Product = require("../models/Product");
const ProductInReceipt = require("../models/ProductInReceipt");
const Receipt = require("../models/Receipt");

const createReceipt = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = await Product.findByPk(productId);

    if (!productId) {
      return res.status(400).json({ error: "productId is required" });
    }
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const total = product.price;
    const receipt = await Receipt.create({ total });

    const productsInReceipt = await ProductInReceipt.create({
      ReceiptId: receipt.id,
      ProductId: product.id,
      quantity: 1,
      price: product.price,
    });

    const response = {
      id: receipt.id,
      total: receipt.total,
      productsInReceipt: [productsInReceipt],
    };

    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const addProductToReceipt = async (req, res) => {
  try {
    const { receiptId } = req.params;
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({ error: "productId is required" });
    }

    const receipt = await Receipt.findByPk(receiptId);
    const product = await Product.findByPk(productId);

    if (!receipt) {
      return res.status(404).json({ error: "Receipt not found" });
    }

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const totalPrice = product.price;

    const productInReceipt = await ProductInReceipt.create({
      ReceiptId: receipt.id,
      ProductId: product.id,
      quantity: 1,
      price: product.price,
    });

    receipt.total += totalPrice;
    await receipt.save();

    res.status(201).json({ total: receipt.total, productInReceipt });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const changeProductQuantity = async (req, res) => {
  try {
    const { receiptId, productId } = req.params;
    const { action, quantity } = req.body;

    const receipt = await Receipt.findByPk(receiptId);
    if (!receipt) {
      return res.status(404).json({ error: "Receipt not found" });
    }

    const productInReceipt = await ProductInReceipt.findOne({
      where: { ReceiptId: receiptId, ProductId: productId },
    });
    if (!productInReceipt) {
      return res.status(404).json({ error: "Product not found in receipt" });
    }

    if (typeof quantity !== "number" || quantity <= -1) {
      return res.status(400).json({ error: "Invalid quantity" });
    }

    if (action === "add") {
      productInReceipt.quantity += quantity;
    } else if (action === "remove") {
      productInReceipt.quantity -= quantity;
    } else if (action === "update") {
      productInReceipt.quantity = quantity;
    } else if (quantity === 0 || action === "delete") {
      receipt.total -= productInReceipt.price * productInReceipt.quantity;
      await receipt.save();

      await productInReceipt.destroy();
      return res.json({
        message: "Product removed from receipt",
        id: productInReceipt.ProductId,
        total: receipt.total,
      });
    } else {
      return res.status(400).json({ error: "Bad request" });
    }

    await productInReceipt.save();

    const productsInReceipt = await ProductInReceipt.findAll({
      where: { ReceiptId: receipt.id },
    });

    let totalPrice = 0;
    productsInReceipt.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });

    receipt.total = totalPrice;
    await receipt.save();
    let response = {
      id: productInReceipt.id,
      quantity: productInReceipt.quantity,
      total: receipt.total,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const closeReceipt = async (req, res) => {
  try {
    const { receiptId } = req.body;
    if (!receiptId) {
      return res.status(400).json({ error: "receiptId is required" });
    }

    const receipt = await Receipt.findByPk(receiptId);
    if (!receipt) {
      return res.status(405).json({ error: "Receipt not found" });
    } else if (receipt.date) {
      return res.status(400).json({ error: "Receipt is already closed" });
    }

    receipt.date = Date.now();
    await receipt.save();

    res.json(receipt);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createReceipt,
  addProductToReceipt,
  changeProductQuantity,
  closeReceipt,
};
