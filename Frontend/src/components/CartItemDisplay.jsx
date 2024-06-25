import React, { useContext } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FoodContext } from '../context/FoodContext';

const CartItemDisplay = ({ image, title, price, qty, id }) => {

    const { removeFromCart } = useContext(FoodContext)

    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={`http://localhost:3000/images/` + image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {title}
                </td>
                <th>
                    <p>${price}</p>
                </th>
                <td><p className='w-10 flex items-center justify-center rounded-md py-2 px-2 border-[1px]'>{qty}</p></td>
                <th>
                    <p>${qty * price}</p>
                </th>
                <th>
                    <p onClick={() => removeFromCart(id)} className='text-2xl text-orange-700 cursor-pointer'><IoIosRemoveCircle /></p>
                </th>
            </tr>
        </>
    )
}

export default CartItemDisplay