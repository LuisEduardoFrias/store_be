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
      
      p.mapper(obj);
      const salePorcent = parseFloat(p.PurchasePrice) * 0.3;
      
      const itbisPorcent = ((parseFloat(p.PurchasePrice) +
      parseFloat(salePorcent)) * (parseFloat(p.Itbis) / 100));
      
      p.SalePrice = parseFloat(p.PurchasePrice) + parseFloat(salePorcent) + parseFloat(itbisPorcent);
      
      return gate.postAsync(p);
   }
    static put(gate, obj) {
      const p = new product();
      p.mapper(obj);
      return gate.putAsync(p);
    }
}

module.exports = ct_products;
