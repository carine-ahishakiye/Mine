import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Index from "../pages/home/index"; // Ensure it's PascalCase
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
      { path: '', element: <Index /> }, // Updated to PascalCase
      { path: 'categories/:categoryName', element: <CategoryPage /> },
      { path: 'search', element: <Search /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'shop/:id', element: <SingleProducts /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> }
    ]
  }
]);

export default router;
