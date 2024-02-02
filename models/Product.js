const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    variants: [
      {
        variantId: {
          type: String,
        },
        variant_name: {
            type: String,
        },
        SKU: {
            type: String,
        },
        additional_cost: {
            type: Number,
            default: 1,
        },
        stock_count: {
            type: Number,
            default: 1,
        },
      },
    ],
    
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);