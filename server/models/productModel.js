import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
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
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['Men', 'Women', 'Kids']
  },
  subCategory: {
    type: String,
    required: true,
    enum: ['Topwear', 'Bottomwear', 'Winterwear']
  },
  bestSeller: {
    type: Boolean,
    default: false
  },
  sizes: {
    type: [String], // e.g. ['S', 'M', 'L']
    required: true
  },
  images: {
    type: [String], // Array of image URLs or filenames
    required: true
  }
}, { timestamps: true });

const productModel = mongoose.models.Product || mongoose.model("Product", productSchema);

export default productModel;
