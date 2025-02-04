import { Router } from "express";
import {
  listProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} from "./productsController";

const router = Router();

router.get("/", listProducts);
//Post = Create product
router.post("/", createProduct);
//Get = Read by specific ID
router.get("/:id", getProductById);
//Put = Update
router.put("/:id", updateProduct);
// Delete
router.delete("/:id", deleteProduct);

export default router;
