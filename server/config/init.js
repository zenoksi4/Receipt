const Product = require("../models/Product");

const init = async () => {
  const productCount = await Product.count();
  if (productCount === 0) {
    const exampleProducts = [
      { name: 'Пельмені "Домашні" АЙС', price: 100 },
      { name: 'Пельмені "Курячі"', price: 150.5 },
      { name: "Вареники з сиром", price: 203.5 },
      { name: "Вареники з картоплею", price: 180 },
      { name: "Картопля по селянськи", price: 105.5 },
      { name: 'Пельмені "стрийзькі"', price: 134 },
      { name: 'Курзе "По Кавказьки"', price: 168 },
      { name: 'Равіолі "ГОСТинчик" вагові', price: 210 },
      { name: 'Борщ "Класичний"', price: 205 },
      { name: 'Бограч "Західний"', price: 198 },
    ];
    await Product.bulkCreate(exampleProducts);
  }
};

module.exports = init;
