const ct_buys = require("../controllers/ct_buys");

const buys = (router, daj) => {
   //
   router.post("/buys", (req, res) => {
      const _res = ct_buys.post(daj, req.body);
      
      if (_res.error === null) {
         res.status(200).json({ data: "Success" });
      } else {
         res.status(400).json({ err: _res.error });
      }
   });
};

module.exports = buys;
