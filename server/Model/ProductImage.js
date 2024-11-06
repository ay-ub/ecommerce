const mongoose = require("mongoose");
const productImageSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  url: { type: String, required: true },
  altText: { type: String },
  position: { type: Number, default: 0 },
});

module.exports = mongoose.model("ProductImage", productImageSchema);
