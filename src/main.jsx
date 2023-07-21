import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import AddProduct from "./components/AddProducts.jsx";
import Products from "./pages/Products.jsx";
import LoginPage from "./pages/LoginPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/add-product",
        element: <AddProduct/>,
    },
    {
        path: "/products",
        element: <Products/>,
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
