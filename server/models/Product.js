const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    price: { type: Number, required: false },
    category: { type: String, required: false },
    color: { type: Array },
    size: { type: Array },
    brand: { type: String, required: false },
    img: { type: String, required: false },
    logo: { type: String, required: false },
    stocks: { type: Number, required: false },
    inStock: { type: Boolean, default: false },
    credit: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
