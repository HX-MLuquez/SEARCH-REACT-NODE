const express = require("express");
const PORT = 5040;
const server = express();

const products = require("./utils/data.json");

//todo: aplicar midellware necesarios
server.use(express.json()); // body
server.use(express.urlencoded({ extended: false })); // form

//todo: aplicar manejo de Cors para dar permisos a nuestro front
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); //Autorizo recibir solicitudes de este dominio
  res.header("Access-Control-Allow-Credentials", "true"); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); //Autorizo recibir solicitudes con dichos hedears
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
  next();
});

server.get("/", (req, res) => {
  res.status(202).json({ message: "SEARCH APP" });
});

//todo: realizar la ruta GET /api/products
server.get("/api/products", (req, res) => {
  if (products.length > 0) {
    res.status(202).json(products);
  } else {
    res.status(404).json({ message: "products not found" });
  }
});
//todo: realizar la ruta GET /api/detail  con id por query
server.get("/api/detail", (req, res) => {
  const { id } = req.query;
  if (products.length > 0) {
    const product = products.find((e) => e.id === Number(id));
    if (product) {
      res.status(202).json(product);
    } else {
      res.status(404).json({ message: "product not found" });
    }
  } else {
    res.status(404).json({ message: "products not found" });
  }
});

server.listen(PORT, () => {
  console.log(`in port: http://localhost:${PORT}`);
});
