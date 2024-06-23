import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FoodContextProvider from './context/FoodContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FoodContextProvider>
    <App />
  </FoodContextProvider>
)
