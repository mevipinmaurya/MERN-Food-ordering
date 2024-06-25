import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import FoodItemDisplay from '../components/FoodItemDisplay';
import { FoodContext } from '../context/FoodContext';
const Items = () => {

    const { foodList } = useContext(FoodContext)

    const itemid = useParams();
    // console.log(itemid)
    const foodItem = foodList.find((e) => e._id === itemid.itemid)
    // console.log(foodItem)

    return (
        <>
            <FoodItemDisplay foodItem={foodItem} />
        </>
    )
}

export default Items