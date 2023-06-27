//const  express = require("express");
//const router = express.Router();
const bills = (router, gate) => {
   router.get("/bills/", (req, res) => {
      res.status(200).json({ message: res.params.id });
   });

   router.get("/bills/:id", (req, res) => {
      res.status(200).json({ message: res.params.id });
   });

   router.post("/bills", (req, res) => {
      res.status(200).json({ message: res.params.id });
   });
};
module.exports = bills;
