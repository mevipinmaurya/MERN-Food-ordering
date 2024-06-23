import React, { createContext } from 'react'
import { food_list } from '../assets/assets'
import { menu_list } from '../assets/assets.js'

export const FoodContext = createContext(null)

const FoodContextProvider = ({children})=>{

    const contextValue = {food_list, menu_list}

    return (
        <FoodContext.Provider value={contextValue}>
            {children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider