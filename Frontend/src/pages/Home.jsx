import React from 'react'
import Hero from '../components/Hero'
import MenuList from '../components/MenuList'
import FoodList from '../components/FoodList'

const Home = () => {
    return (
        <div>
            <Hero />
            <MenuList />
            <FoodList />
        </div>
    )
}

export default Home