import React, { useContext } from 'react'
import { FoodContext } from '../context/FoodContext';

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(FoodContext);
  const deliveryFee = 5;

  return (
    <div className='w-full flex justify-center items-center mb-20 mt-20'>
      <div className='w-[90%]'>

        <div className='flex gap-7 justify-between flex-wrap sm:flex-nowrap'>

          <div className='w-[90%] md:w-[50%] flex flex-col gap-5 p-5'>

            <div className='flex flex-col gap-5'>
              <h1 className='text-2xl font-semibold'>Delivery Information</h1>
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow w-full sm:w-[240px] md:w-[290px] lg:w-[330px]" placeholder="First Name" />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow w-full sm:w-[240px] md:w-[290px] lg:w-[330px]" placeholder="Last Name" />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <input type="email" className="grow w-full sm:w-[240px] md:w-[290px] lg:w-[330px]" placeholder="Email Address" />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow w-full sm:w-[240px] md:w-[290px] lg:w-[330px]" placeholder="Street" />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow w-full sm:w-[240px] md:w-[290px] lg:w-[330px]" placeholder="City" />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow w-full sm:w-[240px] md:w-[290px] lg:w-[330px]" placeholder='State' />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow w-full sm:w-[240px] md:w-[290px] lg:w-[330px]" placeholder="Zip Code" />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow w-full sm:w-[240px] md:w-[290px] lg:w-[330px]" placeholder="Country" />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow w-full sm:w-[240px] md:w-[290px] lg:w-[330px]" placeholder="Phone" />
              </label>

            </div>

          </div>

          <div className='flex w-[90%] md:w-[50%] flex-col gap-3 p-5'>
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
              <button className='btn bg-orange-600 hover:bg-orange-700 text-white pl-4 pr-4'>PROCEED TO PAYMENT</button>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default PlaceOrder