import { Router } from "express";
import {
  listProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} from "./productsController";
import { validateData } from "../../middlewares/validationMiddleware";
import {
  createProductSchema,
  updateProductSchema,
} from "../../db/productsSchema";

const router = Router();

router.get("/", listProducts);
//Post = Create product + Middleware (validateData) for authentication
router.post("/", validateData(createProductSchema), createProduct);
//Get = Read by specific ID
router.get("/:id", getProductById);
//Put = Update
router.put("/:id", validateData(updateProductSchema), updateProduct);
// Delete
router.delete("/:id", deleteProduct);

export default router;
