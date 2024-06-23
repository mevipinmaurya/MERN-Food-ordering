import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import FoodItemDisplay from '../components/FoodItemDisplay';
import { FoodContext } from '../context/FoodContext';
const Items = () => {

    const { food_list } = useContext(FoodContext)

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