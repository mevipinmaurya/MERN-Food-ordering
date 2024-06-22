import React from 'react'
import { food_list } from '../assets/assets'
import { useParams } from 'react-router-dom'
import FoodItemDisplay from '../components/FoodItemDisplay';
const Items = () => {

    const itemid = useParams();
    // console.log(itemid)
    const foodItem = food_list.find((e) => e._id === itemid.itemid)
    // console.log(foods)

    return (
        <>
            <FoodItemDisplay foodItem={foodItem} />
        </>
    )
}

export default Items