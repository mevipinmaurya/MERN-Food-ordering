import React from 'react'
import { menu_list } from '../assets/assets.js'
import MenuCategory from './MenuCategory.jsx';

const MenuList = () => {

    return (
        <div className='w-full flex justify-center items-center mb-20'>
            <div className='w-[90%]'>
                <div className='mb-10'>
                    <h2 className='text-2xl text-black font-semibold'>Explore our menu</h2>
                    <p className='text-sm lg:text-md text-slate-800 mt-4'>Discover an extensive selection of restaurants offering cuisines from around the globe</p>
                    <p className='text-sm lg:text-md text-slate-800'>From local eateries beloved by your community to popular chains and hidden gems waiting to be uncovered</p>
                </div>
                <div className="w-full flex justify-between items-center flex-wrap">
                    {menu_list.map((item, i) => (
                        <MenuCategory key={i} menuName={item.menu_name} menuImage={item.menu_image} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MenuList