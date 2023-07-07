const client = require("../models/client");

class ct_client {
   static getById(gate, key) {
      return gate.getKeyAsync(new client(), key);
   }
   static get(gate) {
      return gate.getAsync(new client());
   }
   static post(gate, obj) {
      const c = new client();
      c.mapper(obj);
      return gate.postAsync(c);
   }
   static put(gate, obj) {
      const c = new client();
      c.mapper(obj);
      return gate.putAsync(c);
   }
   static delete(gate, id) {
      const c = new client();
      c.key = id;
      return gate.deleteAsync(c);
   }
}

module.exports = ct_client;
  