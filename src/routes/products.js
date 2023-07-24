const ct_products = require("../controllers/ct_products");

const products = (router, daj) => {
   //
    router.get("/products", (req, res) => {
      const _res = ct_products.get(daj);
      if (_res.error === null) res.status(200).json(_res.data);
      else res.status(400).json({ err: _res.error });
   });

    router.get("/products/:id", (req, res) => {
      const _res = ct_products.getById(daj, req.params.id);
      if (_res.error === null) res.status(200).json(_res.data);
      else res.status(400).json({ err: _res.error });
   });

    router.post("/products", (req, res) => {
      const _res = ct_products.post(daj, req.body);
      if (_res.error === null) {
         res.status(200).json({ data: "Success" });
      } else {
         res.status(400).json({ err: _res.error });
      }
   });

    router.put("/products", (req, res) => {
      const _res = ct_products.put(daj, req.body);
      if (_res.error === null) {
         res.status(200).json({ data: "Success" });
      } else {
         res.status(400).json({ err: _res.error });
      }
   });
 };
module.exports = products;
