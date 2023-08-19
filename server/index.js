const express = require("express");
const sequelize = require("./config/database");
const cors = require("cors");
const Product = require("./models/Product");
const Receipt = require("./models/Receipt");
const ProductInReceipt = require("./models/ProductInReceipt");
const init = require("./config/init");

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

Receipt.hasMany(ProductInReceipt);
ProductInReceipt.belongsTo(Receipt);

Product.hasMany(ProductInReceipt);
ProductInReceipt.belongsTo(Product);

app.use("/api/products", require("./routes/productsRoute"));
app.use("/api/receipts", require("./routes/receiptsRoute"));

sequelize
  .sync()
  .then(init())
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  });
