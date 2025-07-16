import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js';

// token generation
const generateToken = (id) => {
   return jwt.sign({ id }, process.env.JWT_SECRET)
}

// Route for user login
const loginUser = async (req, res) => {
   try {
      const { email, password } = req.body
      const user = await userModel.findOne({ email })
      if (!user) {
         return res.json({ success: false, message: "User doesn't exist" })
      }

      const isMatched = await bcrypt.compare(password, user.password)
      if (isMatched) {
         const token = generateToken(user._id)
         res.json({ success: true, token })
      } else {
         return res.json({ success: false, message: "invalid credentials" })
      }
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message })
   }
}

// Route for user register
const registerUser = async (req, res) => {
   // 05:58:21
   const { name, email, password } = req.body
   try {
      //  email existance check
      const exists = await userModel.findOne({ email });
      if (exists) {
         return res.json({ success: false, message: "User already exists" })
      }

      // email and pass validation
      if (!validator.isEmail(email)) {
         return res.json({ success: false, message: "enter a valid email" })
      }
      if (password.length < 8) {
         return res.json({ success: false, message: "Password should be 8 characters long" })
      }
      //  hashing password
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)

      const newUser = new userModel({
         name,
         email,
         password: hashedPassword
      })

      const user = await newUser.save()
      const token = generateToken(user._id)
      res.json({ success: true, token })

   } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message })

   }
}

// Route for admin login
const adminLogin = async (req, res) => {

}

export { loginUser, registerUser, adminLogin }