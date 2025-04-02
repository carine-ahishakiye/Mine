import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from "../pages/home/home";
import CategoryPage from '../pages/category/CategoryPage';
import Search from '../pages/search/Search';
import ShopPage from '../pages/shop/ShopPage';
import SingleProducts from '../pages/shop/productDetails/SingleProducts';
import Login from '../components/Login';
import Register from '../components/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: '/categories/:categoryName', element: <CategoryPage /> },
      { path: '/search', element: <Search /> },
      { path: '/shop', element: <ShopPage /> }, // Fixed the path casing
      { path: '/shop/:id', element: <SingleProducts /> } // Fixed the path and parameter
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/Register",
    element: <Register/>
  }
]);

export default router;
