const express = require('express');
const router = express.Router();
const { createReceipt, addProductToReceipt } = require('../controllers/receiptsController')


router.post('/', createReceipt)
router.put('/:receiptId', addProductToReceipt)


module.exports = router;