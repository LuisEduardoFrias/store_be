const product = require("../models/models");

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
      return gate.postAsync(p);
   }
   static put(gate) {}
   static delete(gate, id) {
      const p = new product();
      p.key = id;
      return gate.deleteAsync(p);
   }
}

module.exports = ct_products;
