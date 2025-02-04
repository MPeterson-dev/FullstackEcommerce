import express from "express";
import productsRoutes from "./routes/products/index";

const app = express();
const port = 3000;

//Get = retrieve from API
app.get("/", (req, res) => {
  res.send("Hello Matthias");
});

// Routes
app.use("/products", productsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
