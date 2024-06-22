import React from 'react'
import mobileFood from "../assets/mobileFood.png"
import play_store from "../assets/play_store.png"
import app_store from "../assets/app_store.png"

const Mobile = () => {
  return (
    <div className='w-full flex justify-center items-center mb-20'>
      <div className='w-[90%]'>
        <div className='flex justify-center mt-12 sm:mt-16 md:mt-20 lg:mt-28 flex-wrap sm:flex-nowrap'>
          <div>
            <img src={mobileFood} alt="mobile_icon" className='w-64 sm:w-72 md:w-80 lg:w-96' />
          </div>
          <div className='mt-8 md:mt-5'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Get the <span className='text-orange-600'>Tomato</span> app</h1>
            <p className='mt-5 text-md md:text-lg'>We will send you a link, open it on your phone to download the app</p>
            <div className='flex gap-3 mt-6 flex-wrap sm:flex-nowrap'>
              <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input type="text" className="grow w-[200px] md:w-[250px] outline-none border-none" placeholder="Email" />
              </label>
              <button className='btn bg-orange-600 text-white hover:bg-orange-700'>Share App Link</button>
            </div>
          </div>

        </div>

        <div className='flex justify-center sm:items-center mt-10 flex-col'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Get our app in your mobile device</h1>
          <p className='text-lg mt-5'>Our app is available on Playstore and Appstore</p>
          <p className='text-md mt-5'>Download app from</p>
          <div className='flex mt-6 gap-5 sm:flex-nowrap flex-wrap'>
            <img src={play_store} alt="" className='w-[120px] sm:w-[160px] cursor-pointer hover:scale-105'/>
            <img src={app_store} alt="" className='w-[120px] sm:w-[160px] cursor-pointer hover:scale-105'/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Mobile