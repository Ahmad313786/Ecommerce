import express from "express"
import {addProduct, listProducts, delProduct, singleProduct} from "../controllers/productController.js"
import upload from "../middlewares/multer.js"
import adminAuth from "../middlewares/adminAuth.js"

const productRouter = express.Router()

productRouter.post('/add',adminAuth,upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1},{name:"image3",maxCount:1},{name:"image4",maxCount:1},]),addProduct)
productRouter.post('/remove',adminAuth,delProduct)
productRouter.post('/single', singleProduct) 
productRouter.get('/list', listProducts)

export default productRouter;