import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from "../../../redux/features/cart/cartSlice";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const { selectedItems, totalPrice, tax, taxRate, grandTotal, products } = useSelector((store) => store.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Helper function to safely format numbers
  const formatNumber = (number) => {
    return number !== undefined && number !== null ? number.toFixed(2) : '0.00';
  };

  return (
    <div className="bg-primary-light mt-5 rounded text-base">
      <div className="px-6 py-4 space-y-5">
        <h2 className="text-2xl text-text-dark">Order Summary</h2>
        <p className="text-text-dark mt-2">Selected Items: {selectedItems}</p>
        <p>Total Price: ${formatNumber(totalPrice)}</p>
        <p>Tax ({(taxRate * 100).toFixed(0)}%): ${formatNumber(tax)}</p>
        <h3 className="font-bold">Grand Total: ${formatNumber(grandTotal)}</h3>

        {/* Render the product details if available */}
        <div className="product-list mt-4">
          {products && products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="product-item">
                <p>{product.name}</p>
                <p>Price: ${formatNumber(product.price)}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Category: {product.category}</p>
              </div>
            ))
          ) : (
            <p>No products in your cart.</p>
          )}
        </div>

        <div className="px-4 mb-6">
          <button
            className="bg-primary px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center mb-4"
            onClick={(e) => {
              e.stopPropagation();
              handleClearCart();
            }}
          >
            <span className="mr-2">Clear Cart</span><i className="ri-delete-bin-6-fill"></i>
          </button>
          <button className="bg-green-600 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center mb-4">
            <span className="mr-2">Proceed to Checkout</span><i className="ri-bank-card-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
