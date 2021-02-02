import express from "express";
import Product from "../models/productModel.js";
const router = express.Router();
import asyncHandler from "express-async-handler";


//desc fetch all products
//route GET /api/products
//@access Public

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//desc fetch a specific product
//route GET /api/products
//@access Public
 
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
);

export default router;