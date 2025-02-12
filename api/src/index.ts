import express, { json, urlencoded } from "express";
import productsRoutes from "./routes/products/index.js";
import authRoutes from "./routes/auth/index.js";
import serverless from "serverless-http";
import orderRouters from "./routes/orders/index.js";

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
app.use("/auth", authRoutes);
app.use("/orders", orderRouters);

if (process.env.NODE_ENV == "dev") {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

export const handler = serverless(app);
