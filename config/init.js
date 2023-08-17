const Product = require("../models/Product");


const init = async () => {
    // Check if the Products table is empty
    const productCount = await Product.count();
    if (productCount === 0) {
      // If empty, insert some example products
      const exampleProducts = [
        { name: 'Пельмені "Домашні" АЙС', price: 10.99 },
        { name: 'Пельмені "Курячі"', price: 20.49 },
        { name: 'Вареники з сиром', price: 20.49 },
        { name: 'Вареники з картоплею', price: 20.49 },
        { name: 'Картопля по селянськи', price: 20.49 },
        { name: 'Пельмені "стрийзькі"', price: 20.49 },
        { name: 'Курзе "По Кавказьки"', price: 20.49 },
        { name: 'Равіолі "ГОСТинчик" вагові', price: 20.49 },
        { name: 'Борщ "Класичний"', price: 20.49 },
        { name: 'Бограч "Західний"', price: 20.49 },
        // ... add more products as needed
      ];
      await Product.bulkCreate(exampleProducts);
    }
  
  }

  module.exports = init;