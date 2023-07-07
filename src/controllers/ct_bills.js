const bill = require("../models/bill");

class ct_bill {
   static getById(gate, key) {
      return gate.getKeyAsync(new bill(), key);
   }
   static get(gate) {
      return gate.getAsync(new bill());
   }
   static post(gate, obj) {
      const b = new bill();
      b.mapper(obj);
      return gate.postAsync(b);
   }
   static delete(gate, id) {
      const c = new bill();
      c.key = id;
      return gate.deleteAsync(c);
   }
}

module.exports = ct_bill;
