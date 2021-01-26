import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {
  insertProduct,
  getProducts,
  deleteProduct,
  changeCategory,
  findByCategories,
  updateProduct,
} from "../controllers/productController";
import { updateCategory } from "../services/productService";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/product", (req, res) => {
  insertProduct(req, res);
});

app.get("/products", (req, res) => {
  getProducts(req, res);
});

app.delete("/product", (req, res) => {
  deleteProduct(req, res);
});

app.put("/category", (req, res) => {
  changeCategory(req, res);
});

app.post("/products", (req, res) => {
  findByCategories(req, res);
});

app.put("/product", (req, res) => {
  updateProduct(req, res);
});

export default app;
