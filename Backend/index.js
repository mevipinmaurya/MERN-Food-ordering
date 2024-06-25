import express from 'express'
import cors from 'cors';
import { connectDb } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import "dotenv/config"
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// Config
const app = express()
const port = 3000

// middleware
app.use(express.json())
app.use(cors())


// db Connection 
connectDb()

// API endpoint
app.use("/api/food", foodRouter)                        // eg. http://localhost:3000/api/food/(add, list, remove)
app.use("/images", express.static('uploads'))           // eg. http://localhost:3000/images/1719170861330food_8.png
app.use("/api/user", userRouter);                       // eg. http://localhost:3000/api/user/(register, login)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)


app.get("/", (req, res) => {
    res.send("I am root")
})

app.listen(port, (req, res) => {
    console.log("Listening on port 3000")
})
