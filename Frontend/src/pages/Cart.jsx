import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";

const Cart = () => {
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
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  Greek Salad
                </td>
                <th>
                  <p>$12</p>
                </th>
                <td><p className='w-10 flex items-center justify-center rounded-md py-2 px-2 border-[1px]'>2</p></td>
                <th>
                  <p>$24</p>
                </th>
                <th>
                  <p className='text-2xl text-orange-700 cursor-pointer'><IoIosRemoveCircle /></p>
                </th>
              </tr>
              {/* row 2 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  Greek Salad
                </td>
                <th>
                  <p>$12</p>
                </th>
                <td><p className='w-10 flex items-center justify-center rounded-md py-2 px-2 border-[1px]'>2</p></td>
                <th>
                  <p>$24</p>
                </th>
                <th>
                  <p className='text-2xl text-orange-700 cursor-pointer'><IoIosRemoveCircle /></p>
                </th>
              </tr>
              {/* row 3 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  Greek Salad
                </td>
                <th>
                  <p>$12</p>
                </th>
                <td><p className='w-10 flex items-center justify-center rounded-md py-2 px-2 border-[1px]'>2</p></td>
                <th>
                  <p>$24</p>
                </th>
                <th>
                  <p className='text-2xl text-orange-700 cursor-pointer'><IoIosRemoveCircle /></p>
                </th>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='flex mt-16 justify-between p-3 flex-col gap-10 md:flex-row'>  
          
          <div className='flex w-[90%] md:w-[40%] flex-col gap-3'>
            <h1 className='text-2xl font-semibold'>Cart Totals</h1>
            <div className='flex border-b-[1px] justify-between items-center mt-4'>
              <h1 className='text-lg'>Subtotal</h1>
              <h1 className='text-lg'>$24</h1>
            </div>
            <div className='flex border-b-[1px] justify-between items-center'>
              <h1 className='text-lg'>Delivery Fee</h1>
              <h1 className='text-lg'>$5</h1>
            </div>
            <div className='flex border-b-[1px] justify-between items-center'>
              <h1 className='text-lg font-semibold'>Total</h1>
              <h1 className='text-lg font-semibold'>$29</h1>
            </div>
            <div className='mt-7'>
              <button className='btn bg-orange-600 hover:bg-orange-700 text-white pl-4 pr-4'>PROCEED TO CHECKOUT</button>
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