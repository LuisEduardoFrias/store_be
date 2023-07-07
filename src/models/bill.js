const { dajb } = require("daj");

class bill extends dajb {
  #Date;
  #Products = [];
  #TotalPrice = 0;
  
  constructor(Date, client, Products, TotalPrice) {
    super()
    this.Date = Date;
    this.client = client;
    this.Products = Products;
    this.TotalPrice = TotalPrice;
  }
}

module.exports = bill;