const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    address: { type: Object, required: true },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Cancelled", "In progress", "Completed", "Delivered"],
      default: "In progress",
    },
    products: [
      {
        productId: { type: Object },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
