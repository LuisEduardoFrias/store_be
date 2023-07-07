const ct_bills  = require("../controllers/ct_bills");

const bills = (router, daj) => {
   router.get("/bills", (req, res) => {
      const _res = ct_bills.get(daj);
      if (_res.error === null) res.status(200).json(_res.data);
      else res.status(400).json({ err: _res.error });
   });

   router.get("/bills/:id", (req, res) => {
      const _res = ct_bills.getById(daj, req.params.id);
      if (_res.error === null) res.status(200).json(_res.data);
      else res.status(400).json({ err: _res.error });
   });

};
module.exports = bills;
