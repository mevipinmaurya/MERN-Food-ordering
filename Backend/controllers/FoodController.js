import FoodModel from "../models/food.model.js";
import fs from 'fs'         // fs is 'file system' which is pre-build to the node js



// add food items
const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`

    const food = new FoodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })

    try {
        await food.save()
        res.json({
            success: true,
            message: "Food Added"
        })
    } catch (error) {
        console.log("Error : ", error)
        res.json({
            success: false,
            message: "Failed !!!"
        })
    }
}

// All food list
const listFood = async (req, res) => {
    try {
        const foods = await FoodModel.find({})
        res.json({
            success: true,
            message: foods
        })
    } catch (error) {
        console.log("Error : ", error)
        res.json({
            success: false,
            message: "Failed to Fetch data !!!"
        })
    }
}


// Remove food item
const removeFood = async (req, res) => {
    try {
        const food = await FoodModel.findById(req.body.id)
        // Also delete the 'uploads' folder image file
        fs.unlink(`uploads/${food.image}`, () => { })
        await FoodModel.findByIdAndDelete(req.body.id);
        res.json({
            success: true,
            message: "Food removed"
        })
    } catch (error) {
        console.log("Error : ", error)
        res.json({
            success: false,
            message: "Error"
        })
    }
}


export { addFood, listFood, removeFood }

