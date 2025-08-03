// api/index.js
import express from "express"
import cors from "cors"
import "dotenv/config.js"
import connectDB from "../config/mongoDb.js"
import connectCloudinary from "../config/cloudinary.js"

import userRouter from "../routes/userRoute.js"
import productRouter from "../routes/productRoute.js"
import cartRouter from "../routes/cartRoute.js"
import orderRouter from "../routes/orderRoute.js"

const app = express()

app.use(cors())
app.use(express.json())

connectCloudinary()
connectDB()

// Route mappings
app.use("/api/user", userRouter)
app.use("/api/product", productRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
  res.send("API working (Vercel)")
})

export default app
