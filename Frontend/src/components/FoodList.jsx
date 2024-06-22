import React from 'react'
import { food_list } from '../assets/assets'
import FoodCard from './FoodCard'

const FoodList = () => {
    return (
        <>
            <div className='w-full flex justify-center items-center mb-10'>
                <div className='w-[90%]'>
                    <div className='mb-10'>
                        <h2 className='text-2xl text-black font-semibold'>Our top dishes</h2>
                    </div>
                    <div className="w-full flex justify-evenly items-center flex-wrap gap-3">
                        {food_list.map((item, i) => (
                            <FoodCard key={i} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={item.category} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodList