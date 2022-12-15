const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateTime: {
    type: String,
  },
  bookmarked: {
    type: Boolean,
  },
});

const ProductModel = mongoose.model("productData", productSchema);

module.exports = {
  ProductModel,
};
