import mongoose from 'mongoose'

export const connectDb = async ()=>{
    await mongoose.connect("mongodb+srv://vipinpoko:090909@cluster0.yei2qfs.mongodb.net/?").then(()=>console.log("Database connection successful"))
}