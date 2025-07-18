import {v2 as cloudinary} from "cloudinary"
import productModel from "../models/productModel.js"
// 6:22:45

// Function for add product
const addProduct = async(req,res) => {
    try {
        const {name,description,size,old_price,new_price,category,subCategory,best_seller} = req.body
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]   

        const images = [image1,image2,image3,image4].filter((item) => item !== undefined)

        let imagesURL = await Promise.all(
            images.map(async (item)=> {
                let result = await cloudinary.uploader.upload(item.path,{resource_type:"image"})
                return result.secure_url
            })
        )
        
        const productData = {
            name,
            description,
            size: JSON.parse(size),
            old_price: Number(old_price),
            new_price: Number(new_price),
            category,
            subCategory,
            images: imagesURL,
            best_seller: best_seller == "true" ? true : false
        }

        console.log(productData);
        

        const product = new productModel(productData)
        await product.save()
        
        res.json({success:true,message:"Product Added"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

// Function for list products
const listProducts = async(req,res) => {
// 6:58:05
}

// Function for delete product
const delProduct = async(req,res) => {

}

// Function for single product info
const singleProduct = async(req,res) => {

}

export {addProduct, listProducts, delProduct, singleProduct}