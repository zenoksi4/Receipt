const express = require('express');
const router = express.Router();
const { createReceipt, addProductToReceipt, changeProductQuantity } = require('../controllers/receiptsController')


router.post('/', createReceipt)
router.patch('/:receiptId', addProductToReceipt)
router.patch('/:receiptId/products/:productId', changeProductQuantity)


module.exports = router;