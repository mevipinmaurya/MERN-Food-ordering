import React from 'react'
import {Link} from 'react-router-dom'

const FoodCard = ({ name, image, price, category, description, id }) => {
    return (
        <div>
            <div className="card card-compact w-64 bg-base-100 shadow-xl">
                <figure><img className='hover:scale-110' src={image} alt="food_image" /></figure>
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <h2 className="card-title">{name}</h2>
                        <div className="rating w-16">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <p>{description}</p>
                    <div className="flex justify-between items-center">
                        <p className='font-semibold text-lg text-orange-600'>${price}</p>
                        <Link to={`/item/${id}`} className="flex justify-center items-center w-10 h-10 rounded-full cursor-pointer text-2xl hover:scale-110 bg-orange-600 text-white hover:bg-orange-700">+</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard