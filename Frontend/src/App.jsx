import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Mobile from './pages/Mobile'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/Footer'
import Items from './pages/Items'
import PlaceOrder from './pages/PlaceOrder'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mobile' element={<Mobile />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/item' element={<Items />}>
          <Route path=':itemid' element={<Items />} />
        </Route>
        <Route path='/order' element={<PlaceOrder />} />

        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App