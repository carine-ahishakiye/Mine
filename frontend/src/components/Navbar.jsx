import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartModel from '../pages/shop/CartModel'; // Ensure this component exists
import { useLogoutMutation } from '../redux/features/auth/authApi'; // Your auth API slice
import { logoutSuccess } from '../redux/features/auth/authSlice'; // Your auth slice actions

const Navbar = () => {
  // Read the cart state from Redux
  const selectedItems = useSelector((state) => state.cart?.selectedItems || []);
  
  // Calculate the total number of items (summing the quantities)
  const totalQuantity = selectedItems.reduce((total, item) => total + (item.quantity || 1), 0);
  
  // Access auth state (for example, to show user info)
  const { user } = useSelector((state) => state.auth);
  
  // Local state to manage the cart modal and profile dropdown
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleCartToggle = () => setIsCartOpen(!isCartOpen);

  return (
    <header className="fixed-nav-w-nav">
      <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
        {/* Navigation Links */}
        <ul className="nav__links">
          <li className="link"><Link to="/">Home</Link></li>
          <li className="link"><Link to="/shop">Shop</Link></li>
          
        </ul>

        {/*$body = @{
    name     = "John Doe"
    email    = "johndoe@example.com"
    password = "SecurePassword123"
} | ConvertTo-Json
 Logo */}
        <div className="nav__logo">
          <span>CULTURA<span>.</span></span>
        </div>

        {/* Navbar Icons */}
        <div className="nav__icons relative flex items-center space-x-4">
          {/* Search */}
          <Link to="/search" className="hover:text-primary" aria-label="Search">
            <i className="ri-search-line"></i>
          </Link>

          {/* Cart */}
          <button onClick={handleCartToggle} className="relative hover:text-primary" aria-label="Cart">
            <i className="ri-shopping-bag-3-fill"></i>
            {totalQuantity > 0 && (
              <sup className="text-sm absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-white rounded-full bg-primary px-1">
                {totalQuantity}
              </sup>
            )}
          </button>

          {/* User Profile */}
          {user ? (
            <div className="relative">
              <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="hover:text-primary" aria-label="Profile">
                <i className="ri-user-line"></i>
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-40 py-2 z-50">
                  <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Profile</Link>
                  {/* Add logout button or other profile options here */}
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="hover:text-primary" aria-label="Login">
              <i className="ri-user-line"></i>
            </Link>
          )}
        </div>
      </nav>

      {/* Cart Modal */}
      {isCartOpen && (
        <CartModel 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          // Optionally pass products or selectedItems if needed:
          products={selectedItems}
        />
      )}
    </header>
  );
};

export default Navbar;
