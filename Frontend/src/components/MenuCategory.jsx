import React from 'react'

const MenuCategory = ({ menuName, menuImage }) => {
    // console.log(menuName)
    return (
        <div className='flex flex-col items-center justify-between gap-3 cursor-pointer'>
            <img src={menuImage} alt="" className='w-[50px] md:w-[70px] lg:w-[100px]'/>
            <p>{menuName}</p>
        </div>
    )
}

export default MenuCategory