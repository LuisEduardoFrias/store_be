//const express = require("express");
//const router = express.Router();
const clients = (router, gate) => {
   router.get("/clients/", (req, res) => {
      res.status(200).json({ message: res.params.id });
   });

   router.get("/clients/:id", (req, res) => {
      res.status(200).json({ message: res.params.id });
   });

   router.post("/clients", (req, res) => {
      res.status(200).json({ message: res.params.id });
   });

   router.put("/clients/", (req, res) => {
      res.status(200).json({ message: res.params.id });
   });

   router.delete("/clients/:id", (req, res) => {
      res.status(200).json({ message: res.params.id });
   });
};
module.exports = clients;
