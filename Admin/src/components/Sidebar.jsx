import React from 'react'
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaClipboardList, FaSitemap } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className='w-full flex gap-5 flex-row justify-center items-center lg:flex-col lg:justify-end lg:items-end'>
                <NavLink to={'/add'} className='cursor-pointer flex gap-4 items-center mt-5 lg:mt-20 pl-2 md:pl-10 pr-2 md:pr-10 pt-2 pb-2 md:pt-5 md:pb-5 border border-r-0 w-[120px] md:w-[190px]'>
                    <div>
                        <FaRegSquarePlus />
                    </div>
                    <div>
                        <p className='text-[12px] md:text-[15px]'>Add Items</p>
                    </div>
                </NavLink>
                <NavLink to={'/list'} className='cursor-pointer flex gap-4 items-center mt-5 lg:mt-5 pl-2 md:pl-10 pr-2 md:pr-10 pt-2 pb-2 md:pt-5 md:pb-5 border border-r-0 w-[120px] md:w-[190px]'>
                    <div>
                        <FaClipboardList />
                    </div>
                    <div>
                        <p className='text-[12px] md:text-[15px]'>List Items</p>
                    </div>
                </NavLink>
                <NavLink to={"/orders"} className='cursor-pointer flex gap-4 items-center mt-5 lg:mt-5 pl-2 md:pl-10 pr-2 md:pr-10 pt-2 pb-2 md:pt-5 md:pb-5 border border-r-0 w-[120px] md:w-[190px]'>
                    <div>
                        <FaSitemap />
                    </div>
                    <div>
                        <p className='text-[12px] md:text-[15px]'>Orders</p>
                    </div>
                </NavLink>
            </div>
        </>
    )
}

export default Sidebar