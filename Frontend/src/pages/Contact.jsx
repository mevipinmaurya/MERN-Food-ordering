import React from 'react'
import header_img from "../assets/header_img.png"
import delivery from "../assets/delivery.png"
import { FaMobile } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='w-full flex justify-center items-center mt-7 mb-20'>
      <div className='w-[90%]'>
        <div className='w-full h-[320px] rounded-3xl bg-no-repeat bg-cover bg-center relative bg-blend-overlay bg-black/60' style={{ backgroundImage: `url(${header_img})` }}>
          <div className='w-full h-full flex items-center rounded-lg text-center justify-center md:items-center md:text-center flex-col absolute'>
            <div className='md:w-[80%] w-[95%]'>
              <h2 className='text-3xl md:text-5xl lg:text-5xl pl-10 pr-10 text-white font-semibold'>We would love to hear from you</h2>
            </div>
          </div>
        </div>

        <div className='flex gap-7 mt-20 justify-evenly flex-wrap sm:flex-nowrap'>
          <div className='flex flex-col gap-5'>
            <label className="input input-bordered flex items-center gap-2">
              <FaUserAlt />
              <input type="text" className="grow w-full sm:w-[240px] md:w-[290px] lg:w-[330px]" placeholder="Full Name" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <MdEmail />
              <input type="email" className="grow w-full sm:w-[240px] md:w-[290px] lg:w-[330px]" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <FaMobile />
              <input type="text" className="grow w-full sm:w-[240px] md:w-[290px] lg:w-[330px]" placeholder='Mobile No.' />
            </label>
            <textarea className="textarea textarea-bordered resize-none sm:textarea-sm md:textarea-md lg:textarea-lg" placeholder="Type Text"></textarea>
            <button className='btn bg-orange-600 inline font-semibold text-white text-xl hover:bg-orange-700'>Submit</button>
          </div>

          <div className='sm:block hidden'>
            <img src={delivery} alt="" className='w-96' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact