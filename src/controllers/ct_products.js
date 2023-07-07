const product = require("../models/product");

class ct_products {
   static getById(gate, key) {
      return gate.getKeyAsync(new product(), key);
   }
   static get(gate) {
      return gate.getAsync(new product());
   }
   static post(gate, obj) {
      const p = new product();
      console.table(new product())
      p.mapper(obj);
      const salePorcent = p.PurchasePrice * 0.3;
      const itbisPorcent = (p.PurchasePrice + salePorcent) * 0.18;
      p.SalePrice = p.PurchasePrice + salePorcent + itbisPorcent;
      
      return gate.postAsync(p);
   }
   static put(gate, obj) {
      const p = new product();
      p.mapper(obj);
      return gate.putAsync(p);
   }
}

module.exports = ct_products;
