import React from 'react'
import header_img from "../assets/header_img.png"

const Hero = () => {
    return (
        <div className='w-full h-auto mt-5 flex justify-center'>
            <div className="w-[90%]">
                <div className='w-full h-[520px] rounded-3xl bg-no-repeat bg-cover bg-center relative bg-blend-overlay bg-black/40' style={{ backgroundImage: `url(${header_img})` }}>
                    <div className='w-full h-full flex items-center rounded-lg text-left float-left justify-center md:items-center md:text-center flex-col absolute'>
                        <div className='md:w-[80%] w-[95%]'>
                            <h2 className='text-3xl md:text-5xl lg:text-6xl pl-10 pr-10 text-white font-semibold'>Experience a world of flavors with our diverse menu</h2>
                            <p className='text-sm md:text-lg pl-10 pr-10 mt-7 md:mt-9 text-slate-300'>Indulge in our chef's special creations. Handcrafted with passion and precision, each dish is a masterpiece of taste and presentation. Enjoy the convenience of ordering online. Our user-friendly interface ensures your favorite meal is just a few clicks away.</p>
                            <button className='btn bg-white ml-10 hover:text-orange-600 hover:bg-white text-black border-none rounded-3xl mt-5'>View Menu</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero