import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { TiUserAdd } from "react-icons/ti";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {

    const [menuStyle, setMenuStyle] = useState("/")

    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[90%]'>
                <div className="navbar bg-base-100 p-3">
                    <div className="flex-1">
                        <img className='w-[160px] h-[25px]' src={logo} alt="" />
                    </div>
                    <div className='md:hidden mr-3 block'>
                        <div className='text-3xl cursor-pointer'><MdOutlineRestaurantMenu /></div>
                    </div>
                    <div className='hidden mr-5 md:block'>
                        <ul className='flex text-md md:text-lg lg:text-lg gap-6'>
                            <Link onClick={() => setMenuStyle("/")} to={"/"} className='hover:cursor-pointer'>Home {menuStyle === "/" && <hr className='h-[3px] w-8 bg-orange-600' />}</Link>
                            <Link onClick={() => setMenuStyle("menu")} to={"/menu"} className='hover:cursor-pointer'>Menu {menuStyle === "menu" && <hr className='h-[3px] w-8 bg-orange-600' />}</Link>
                            <Link onClick={() => setMenuStyle("mobile")} to={"/mobile"} className='hover:cursor-pointer'>Mobile app {menuStyle === "mobile" && <hr className='h-[3px] w-8 bg-orange-600' />}</Link>
                            <Link onClick={() => setMenuStyle("contact")} to={"/contact"} className='hover:cursor-pointer'>Contact us {menuStyle === "contact" && <hr className='h-[3px] w-8 bg-orange-600' />}</Link>
                        </ul>
                    </div>
                    <div className="flex-none">
                        <div className="dropdown dropdown-end mr-5">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">0</span>
                                </div>
                            </div>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <Link to={"/cart"} className="btn bg-orange-600 btn-block text-white hover:bg-orange-700">View cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Link to={"/login"} className='text-3xl text-orange-600'><TiUserAdd /></Link>
                        </div>

                        {/* <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar