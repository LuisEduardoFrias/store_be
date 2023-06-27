//const express = require("express");
//const router = express.Router();
const ct_products = require("../controllers/ct_products");

const products = (router, gate) => {
   //
   router.get("/api/products/", (req, res) => {
      const _res = ct_products.get(gate);
      if (_res.error === null) res.status(200).json(_res.data);
      else res.status(400).json({ err: _res.error });
   });

   router.get("/api/products/:id", (req, res) => {
      const _res = ct_products.getById(gate, req.params.id);
      if (_res.error === null) res.status(200).json(_res.data);
      else res.status(400).json({ err: _res.error });
   });

   router.post("/api/products", (req, res) => {
      const _res = ct_products.post(gate, req.body);
      if (_res.error === null) {
         res.status(200).json({ data: "Success" });
      } else {
         res.status(400).json({ err: _res.error });
      }
   });

   router.put("/api/products/", (req, res) => {
      res.status(200).json({ message: res.params.id });
   });

   router.delete("/api/products/:id", (req, res) => {
      const _res = ct_products.delete(gate, req.params.id);

      if (_res.error === null) {
         res.status(200).json({ data: _res.data });
      } else {
         res.status(400).json({ err: _res.error });
      }
   });
};
module.exports = products;
