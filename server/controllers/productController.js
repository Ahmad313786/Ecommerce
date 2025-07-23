import {v2 as cloudinary} from "cloudinary"
import productModel from "../models/productModel.js"
// 6:22:45

// Function for add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller
    } = req.body;

    // extract images from form-data
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(Boolean);

    // upload images to cloudinary
    const imagesURL = await Promise.all(
      images.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, {
          resource_type: "image"
        });
        return result.secure_url;
      })
    );

    // assemble product object
    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes), // must be stringified JSON in frontend
      images: imagesURL,
      bestSeller: bestSeller === "true"
    };

    console.log("Product Data:", productData);

    // save product
    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// Function for list products
const listProducts = async(req,res) => {
// 6:58:05
try {
    const products = await productModel.find({})
    res.json({success:true,products})
} catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
    
}
}

// Function for delete product
const delProduct = async(req,res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

// Function for single product info
const singleProduct = async(req,res) => {
try {
    const { productId } = req.body
    const product = await productModel.findById(productId)
    res.json({success:true,product})
} catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
}
}

export {addProduct, listProducts, delProduct, singleProduct}