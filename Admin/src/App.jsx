import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Orders from './pages/Orders'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "http://localhost:3000";

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="flex w-full lg:flex-row flex-col gap-5">
        <div className="w-full lg:w-[18%] lg:h-screen lg:border-r-[1px] flex justify-start items-start h-auto flex-grow ">
          <Sidebar />
        </div>
        <div className="w-full lg:w-[82%] flex justify-start items-start h-auto flex-grow">
          <Routes>
            <Route path='/add' element={<Add url={url}/>} />
            <Route path='/list' element={<List url={url}/>} />
            <Route path='/orders' element={<Orders url={url}/>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App