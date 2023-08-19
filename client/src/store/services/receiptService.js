import axios from "axios";

const proxy = process.env.REACT_APP_PROXY || "http://localhost:5000"

const createReceipt = async (productId) => {
  const response = await axios.post(`${proxy}/api/receipts`, {
    productId: productId,
  });
  return response.data;
};

const addProductToReceipt = async (productId, receiptId) => {
  const addedProduct = await axios.patch(
    `${proxy}/api/receipts/new-product/${receiptId}`,
    { productId: productId }
  );
  return addedProduct.data;
};

const changeQuantity = async (productId, receiptId, action, quantity) => {
  const response = await axios.patch(
    `${proxy}/api/receipts/${receiptId}/products/${productId}`,
    {
      action: action,
      quantity: quantity,
    }
  );
  return response.data;
};

const closeReceipt = async (receiptId) => {
  const response = await axios.patch(`${proxy}/api/receipts/close`, {
    receiptId: receiptId,
  });
  return response.data;
};

const receiptService = {
  createReceipt,
  addProductToReceipt,
  changeQuantity,
  closeReceipt,
};

export default receiptService;
