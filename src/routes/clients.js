const ct_clients = require("../controllers/ct_clients");

const clients = (router, daj) => {
   router.get("/clients", (req, res) => {
      const _res = ct_clients.get(daj);
      if (_res.error === null) res.status(200).json(_res.data);
      else res.status(400).json({ err: _res.error });
   });
   
   router.get("/clients/:id", (req, res) => {
      const _res = ct_clients.getById(daj, req.params.id);
      if (_res.error === null) res.status(200).json(_res.data);
      else res.status(400).json({ err: _res.error });
   });

   router.post("/clients", (req, res) => {
      const _res = ct_clients.post(daj, req.body);
      if (_res.error === null) {
         res.status(200).json({ data: "Success" });
      } else {
         res.status(400).json({ err: _res.error });
      }
   });

   router.put("/clients", (req, res) => {
      const _res = ct_clients.put(daj, req.body);
      if (_res.error === null) {
         res.status(200).json({ data: "Success" });
      } else {
         res.status(400).json({ err: _res.error });
      }
   });

   router.delete("/clients/:id", (req, res) => {
      const _res = ct_clients.delete(daj, req.params.id);
      if (_res.error === null) {
         res.status(200).json({ data: _res.data });
      } else {
         res.status(400).json({ err: _res.error });
      }
   });
};
module.exports = clients;
