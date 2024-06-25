import React, { createContext, useEffect, useState } from 'react'
import { menu_list } from '../assets/assets.js'
import axios from 'axios'

export const FoodContext = createContext(null)

const getDefaultCart = () => {
    const cart = {}
    for (let i = 0; i < 300 + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}


const FoodContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const url = "http://localhost:3000";

    const [token, setToken] = useState("");

    const [avatarName, setAvatarName] = useState('');

    // To Fetch Food list data from the database
    const [foodList, setFoodList] = useState([])

    const fetchList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.message);
        // console.log(response)
    }


    useEffect(() => {
        const loadData = async () => {
            await fetchList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                setAvatarName(localStorage.getItem("avtar"))
            }
        }
        loadData();
    }, [])


    // AddToCart function
    const addToCart = (itemId) => {
        console.log("ID of item is "+itemId)
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
                const itemInfo = foodList.find((item) => item._id === items)
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

    const contextValue = {
        foodList,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems,
        url,
        token,
        setToken,
        avatarName,
        setAvatarName
    }

    return (
        <FoodContext.Provider value={contextValue}>
            {children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider