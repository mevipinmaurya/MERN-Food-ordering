import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import FoodCard from './FoodCard.jsx';
import { FoodContext } from '../context/FoodContext.jsx';

const FoodItemDisplay = ({ foodItem }) => {
    const {food_list} = useContext(FoodContext)

    return (
        <div className='w-full flex justify-center items-center mt-14 mb-20'>
            <div className='w-[90%]'>
                <div className='flex flex-col justify-center'>
                    <div className='flex flex-wrap gap-4'>
                        <img src={foodItem.image} alt="" className='w-[520px] hover:scale-105 rounded-md' />
                        <div className='flex flex-col gap-4'>
                            <img src={foodItem.image} alt="" className='w-[250px] hover:scale-105 rounded-md' />
                            <img src={foodItem.image} alt="" className='w-[250px] hover:scale-105 rounded-md' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <img src={foodItem.image} alt="" className='w-[250px] hover:scale-105 rounded-md' />
                            <img src={foodItem.image} alt="" className='w-[250px] hover:scale-105 rounded-md' />
                        </div>
                    </div>
                    <div className='w-full flex-col flex mt-10'>
                        <div className='flex flex-wrap md:flex-nowrap items-center'>
                            <h2 className='text-3xl font-semibold'>{foodItem.name}</h2>
                            <div className='flex text-orange-600 md:ml-11 items-center'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <CiStar />
                                <span>(14.5k Ratings)</span>
                            </div>
                        </div>
                        <div className='flex flex-col mt-7'>
                            <p className='text-lg'>{foodItem.description}</p>
                            <p className='text-sm mt-3 mb-3'>The umami richness of a perfectly seared steak, the delicate balance of spices in an Indian curry, or the comforting warmth of a bowl of ramen on a chilly evening. Each bite tells a story of tradition, craftsmanship, and a deep-rooted connection to the land and its people.</p>
                            <div className='text-2xl font-semibold text-orange-600'><span className='text-black'>Price : </span>${foodItem.price}</div>
                            <button className="btn bg-orange-600 hover:bg-orange-700 text-white text-lg mt-7 w-[160px]">Add To Cart</button>
                        </div>
                    </div>
                </div>

                {/* Similar food items */}
                <div className='mb-10 mt-16'>
                    <h2 className='text-4xl text-black font-semibold'>Related Items </h2>
                </div>
                <div className="w-full flex justify-evenly items-center flex-wrap gap-3">
                    {food_list.map((item, i) => (
                        item.category === foodItem.category && <FoodCard key={i} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={item.category} />
                        // console.log("yess")
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FoodItemDisplay