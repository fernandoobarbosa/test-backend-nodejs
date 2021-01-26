import mongoose from "../config/database";

const ProductSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
