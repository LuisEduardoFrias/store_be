const { dajb } = require("daj");

class product extends dajb {
   #SalePrice; 
   #PurchasePrice; 
   #Itbis;
   #Stock;
   
   constructor(Name, Description, PurchasePrice, SalePrice, Itbis, Stock) {
      super();
      this.Name = Name;
      this.Description = Description;
      this.PurchasePrice = PurchasePrice;
      this.SalePrice = (SalePrice + (SalePrice * Itbis));
      this.Itbis = Itbis;
      this.Stock = Stock;
   }
 
   setStock(value) {
     this.Stock = value;
   }
   setSalePrice(value) {
     this.SalePrice = value;
   }
   
   getSalePrice() {
     return this.SalePrice;
   }
   getPurchasePrice() {
     return this.PurchasePrice;
   }
   getItbis() {
     return this.Itbis;
   }
   getStock() {
     return this.Stock;
   }
}

module.exports = product;