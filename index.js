const express = require("express");
const sequelize = require("./config/database");
const cors = require('cors')
const Product = require("./models/Product");
const Receipt = require("./models/Receipt");
const ProductInReceipt = require("./models/ProductInReceipt");
const init = require("./config/init");

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

Receipt.hasMany(ProductInReceipt);
ProductInReceipt.belongsTo(Receipt);

Product.hasMany(ProductInReceipt);
ProductInReceipt.belongsTo(Product);

sequelize
  .sync()
  .then(init())
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server is running on port ${port}`);
    });
  });
