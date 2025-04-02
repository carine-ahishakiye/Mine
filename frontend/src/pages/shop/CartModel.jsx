import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, updateQuantity, clearCart } from "../../redux/features/cart/cartSlice";  // Corrected path

const CartModel = ({ closeModal }) => {
  const dispatch = useDispatch();

  // Get cart items and item count from Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = useSelector((state) => state.cart.itemCount);  // total number of items in cart

  const handleIncreaseQuantity = (productId) => {
    const product = cartItems.find((item) => item.id === productId);
    if (product) {
      dispatch(updateQuantity({ id: productId, quantity: product.quantity + 1 }));
    }
  };

  const handleDecreaseQuantity = (productId) => {
    const product = cartItems.find((item) => item.id === productId);
    if (product && product.quantity > 1) {
      dispatch(updateQuantity({ id: productId, quantity: product.quantity - 1 }));
    }
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <>
      {/* Cart Header */}
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Shopping Cart</h2>
        <div className="section__subheader space-x-2">
          <span className="hover:text-primary">
            <a href="/">Home</a>
          </span>
          <i className="ri-arrow-right-long-fill"></i>
          <span className="hover:text-primary">
            <a href="/cart">Cart</a>
          </span>
        </div>
      </section>

      {/* Cart Items Section */}
      <section className="section__container mt-8">
        <div className="flex flex-col items-center md:flex-row gap-8">
          <div className="md:w-1/2 w-full">
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Cart Items</h3>
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.imageUrl || "https://via.placeholder.com/100"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-gray-600">Price: ${item.price}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-center">
                      <button
                        onClick={() => handleIncreaseQuantity(item.id)}
                        className="px-4 py-2 bg-primary text-white rounded-md"
                      >
                        +
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleDecreaseQuantity(item.id)}
                        className="px-4 py-2 bg-primary text-white rounded-md"
                      >
                        -
                      </button>
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Total Price */}
          <div className="md:w-1/3 w-full bg-white p-6 rounded-md shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
            <p className="text-xl mb-4">
              Total: $
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              ).toFixed(2)}
            </p>
            <button
              onClick={closeModal}
              className="w-full py-3 bg-primary text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartModel;
