import express, { json, urlencoded } from "express";
import productsRoutes from "./routes/products/index";

const app = express();
const port = 3000;

//Middleware
app.use(urlencoded({ extended: false }));
app.use(json());

//Get = retrieve from API
app.get("/", (req, res) => {
  res.send("Hello Matthias");
});

// Routes
app.use("/products", productsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
