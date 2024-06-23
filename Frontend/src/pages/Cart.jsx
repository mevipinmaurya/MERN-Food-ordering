import React, { useContext } from 'react'
import CartItemDisplay from '../components/CartItemDisplay';
import { FoodContext } from '../context/FoodContext';
import { useNavigate } from "react-router-dom"

const Cart = () => {

  const { food_list, cartItems, getTotalCartAmount } = useContext(FoodContext);
  const deliveryFee = 5;

  const navigate = useNavigate();

  return (
    <div className='w-full flex justify-center items-center mb-20 mt-10'>
      <div className='w-[90%]'>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Item</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {
                food_list.map((e) => (
                  cartItems[e._id] > 0 && <CartItemDisplay key={e._id} image={e.image} title={e.name} price={e.price} qty={cartItems[e._id]} id={e._id} />
                ))
              }
            </tbody>
          </table>
        </div>

        <div className='flex mt-16 justify-between p-3 flex-col gap-10 md:flex-row'>

          <div className='flex w-[90%] md:w-[40%] flex-col gap-3'>
            <h1 className='text-2xl font-semibold'>Cart Totals</h1>
            <div className='flex border-b-[1px] justify-between items-center mt-4'>
              <h1 className='text-lg'>Subtotal</h1>
              <h1 className='text-lg'>${getTotalCartAmount()}</h1>
            </div>
            <div className='flex border-b-[1px] justify-between items-center'>
              <h1 className='text-lg'>Delivery Fee</h1>
              <h1 className='text-lg'>${getTotalCartAmount() ? deliveryFee : 0}</h1>
            </div>
            <div className='flex border-b-[1px] justify-between items-center'>
              <h1 className='text-lg font-semibold'>Total</h1>
              <h1 className='text-lg font-semibold'>${getTotalCartAmount() ? getTotalCartAmount() + deliveryFee : 0}</h1>
            </div>
            <div className='mt-7'>
              <button onClick={() => navigate("/order")} className='btn bg-orange-600 hover:bg-orange-700 text-white pl-4 pr-4'>PROCEED TO CHECKOUT</button>
            </div>
          </div>

          <div className='w-[80%] md:w-[50%]'>
            <div className='flex gap-4 flex-col'>
              <p>If you have a promocode enter it here</p>
              <div className="join">
                <input className="input focus:outline-none input-bordered join-item rounded-l-full w-56 sm:w-72 md:w-80" placeholder="Email" />
                <button className="btn join-item rounded-r-full bg-black text-white hover:bg-black">Subscribe</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart