import express from "express";
import { productRouter } from "./routes/products.routes.js";
import { cartRouter } from "./routes/carts.routes.js";

const app = express();
const port = 8080;

app.listen(port, () => console.log(`El servidor se está ejecutando en el puerto ${port}`));

//productos intermedios
app.use(express.json());


//Rutas
app.use("/api/products",productRouter);
app.use("/api/carts",cartRouter);























