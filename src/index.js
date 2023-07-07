const express = require("express");
const path = require("path");
const gateway = require("httpc");
const cors = require("cors");
const morgan = require("morgan");
const {daj} = require("daj");
//
const products = require("./routes/products")
const clients = require("./routes/clients")
const bills = require("./routes/bills")
const buys = require("./routes/buys")

const app = express();

//settings
//app.set("protocol", "http//");
//app.set("domain", "localhost:");
app.set("port", 8000);
////middlewares
const gate = new gateway(app);

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev")); // combined
app.use(cors());
// routes

products(gate, daj);
clients(gate,daj);
bills(gate,daj);
buys(gate,daj);
gate.api();


app.listen(app.get("port"), () =>
  console.log(`server on port:${app.get("port")}`)
);

