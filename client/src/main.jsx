import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ShopContextProvider from "./context/ShopContext.jsx"
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>,
)
