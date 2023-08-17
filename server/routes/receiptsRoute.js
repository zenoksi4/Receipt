const express = require('express');
const router = express.Router();
const { createReceipt, addProductToReceipt, changeProductQuantity, closeReceipt } = require('../controllers/receiptsController')


router.post('/', createReceipt)
router.patch('/new-product/:receiptId', addProductToReceipt)
router.patch('/:receiptId/products/:productId', changeProductQuantity)
router.patch('/close', closeReceipt)


module.exports = router;