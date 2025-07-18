import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  size: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['men', 'women', 'kid'], // Optional: restrict to known categories
    lowercase: true
  },
  subCategory: {
    type: String,
    required: true,
    trim: true
  },
  images: {
    type: Array,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
    min: 0
  },
  old_price: {
    type: Number,
    required: true,
    min: 0
  },
  best_seller: {
    type: Boolean,
  }
});

const productModel = mongoose.models.product || mongoose.model("product",productSchema)

export default productModel