import React, { createContext, useState } from 'react'
import { food_list } from '../assets/assets'
import { menu_list } from '../assets/assets.js'

export const FoodContext = createContext(null)

const getDefaultCart = () => {
    const cart = {}
    for (let i = 0; i < food_list.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}


const FoodContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    // AddToCart function
    const addToCart = (itemId) => {
        console.log(itemId)
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItems)
    }

    // RemoveToCart function
    const removeFromCart = (itemId) => {
        console.log(itemId)
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    // GetTotalCartAmount function
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (let items in cartItems) {
            if (cartItems[items] > 0) {
                const itemInfo = food_list.find((item) => item._id === items)
                totalAmount += itemInfo.price * cartItems[items]
            }
        }
        return totalAmount;
    }

    // GetTotalCartItems function
    const getTotalCartItems = () => {
        let totalItems = 0;
        for (let items in cartItems) {
            if (cartItems[items] > 0) {
                totalItems += cartItems[items]
            }
        }
        return totalItems;
    }

    const contextValue = { food_list, menu_list, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems }

    return (
        <FoodContext.Provider value={contextValue}>
            {children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider