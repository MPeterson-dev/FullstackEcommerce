import { Router } from "express";
import {
  listProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} from "./productsController.js";
import { validateData } from "../../middlewares/validationMiddleware.js";
import {
  createProductSchema,
  updateProductSchema,
} from "../../db/productsSchema.js";
import { verifySeller, verifyToken } from "../../middlewares/authMiddleware.js";

const router = Router();

router.get("/", listProducts);
//Post = Create product + Middleware (verifyToken and validateData) for authentication
router.post(
  "/",
  verifyToken,
  verifySeller,
  validateData(createProductSchema),
  createProduct
);
//Get = Read by specific ID
router.get("/:id", getProductById);
//Put = Update
router.put(
  "/:id",
  verifyToken,
  verifySeller,
  validateData(updateProductSchema),
  updateProduct
);
// Delete
router.delete("/:id", verifyToken, verifySeller, deleteProduct);

export default router;
