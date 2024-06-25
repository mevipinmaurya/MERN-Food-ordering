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


    // AddToCart function
    const addToCart = async (itemId) => {
        // console.log("ID of item is " + itemId)
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else{
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        // console.log(cartItems)

        if(token){
            await axios.post(url+"/api/cart/add", {itemId}, {headers : {token}})
        }
    }

    // RemoveToCart function
    const removeFromCart = async (itemId) => {
        // console.log(itemId)
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

        if(token){
            await axios.post(url+"/api/cart/remove", {itemId}, {headers : {token}})
        }
    }


    // Get cartData from the database
    const loadCartData = async (token)=>{
        const response = await axios.post(url+"/api/cart/get", {},{headers : {token}})
        setCartItems(response.data.cartData)
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


    useEffect(() => {
        const loadData = async () => {
            await fetchList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                setAvatarName(localStorage.getItem("avtar"))
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    }, [])

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
        setAvatarName,
        loadCartData
    }

    return (
        <FoodContext.Provider value={contextValue}>
            {children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider