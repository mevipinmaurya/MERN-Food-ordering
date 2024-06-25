import UserModel from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}


// register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Checking if user already exists
        const exists = await UserModel.findOne({ email: email })
        if (exists) {
            return res.json({
                success: false,
                message: "User already exist"
            })
        }

        // Validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Please enter a valid email"
            })
        }

        if (password.length < 8) {
            return res.json({
                success: false,
                message: "Please enter a strong password"
            })
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt);

        const newUser = new UserModel({
            name: name,
            email: email,
            password: hashedPass
        })

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({
            success: true,
            token
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Error"
        })
    }
}


// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email })
        if (!user) {
            return res.json({
                success: false,
                message: "User does not exist"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.json({
                success: false,
                message: "Incorrect Password"
            })
        }

        const token = createToken(user._id)

        res.json({
            success: true,
            token
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error"
        })
    }
}


export { registerUser, loginUser }