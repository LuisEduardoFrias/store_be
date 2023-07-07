const buy = require("../models/buy");
const bill = require("../models/bill");

const ct_products = require("./ct_products");
const ct_clients = require("./ct_clients");
const ct_bills = require("./ct_bills");

class ct_buy {
   static post(gate, obj) {
     
     
      const b = new buy();
      b.mapper(obj);
      
      const produts = [];
     
      const client =  ct_clients.getById(gate, b.client);
      
      if(client.error)
      {
        return client;
      }
      
      let totalCashValue = 0;

      b.products.forEach(e => {
        const p = ct_products.getById(gate, e);
        
        if(p.error) { return p.error; }
        
        totalCashValue += p.data.SalePrice;
        produts.push(p.data);
      })

      const _bill = new bill(new Date(), client.data, produts, totalCashValue )
 

      return ct_bills.post(gate, _bill);
      
   }
}

module.exports = ct_buy;

