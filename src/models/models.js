const { daj } = require("../../../DaJ/index.js");

class product extends daj {
   constructor(Name, Price, Stock) {
      super();
      this.Name = Name;
      this.Price = Price;
      this.Stock = Stock;
   }
}

module.exports = product;
