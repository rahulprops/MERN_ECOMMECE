import React, { useEffect, useState } from 'react';
import { useDeleteCartMutation, useGetCartQuery, useUpdateCartMutation,  } from '../features/apis/cartApi';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'; // Import react-icons
import { Link } from 'react-router-dom';

const AddToCart = () => {
  // Fetch cart data using the API
  const { data: cart, isLoading, isSuccess, error } = useGetCartQuery();
  const [updateCart, { isSuccess: cartUpdateSuccess }] = useUpdateCartMutation();
   const [deleteCart,{ isSuccess:deleteCartSucess}]=useDeleteCartMutation()

  // Handle increment of quantity
  const incrementQuantity = (productId) => {
    const quantity = 1;
    updateCart({ productId, quantity });
  };

  // Handle decrement of quantity
  const decrementQuantity = (productId) => {
    const quantity = -1;
    updateCart({ productId, quantity });
  };

  // Handle delete item from cart
  const handleDeleteItem = (productId) => {
    deleteCart(productId)
  };

  useEffect(() => {
    if (cartUpdateSuccess) {
      alert("Cart updated successfully");
    }
    if (deleteCartSucess) {
      alert("Item deleted successfully");
    }
  }, [cartUpdateSuccess,deleteCartSucess]);

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.salePrice * item.quantity, 0).toFixed(2);
  };

  // Loading and error handling
  if (isLoading) return <div className="text-center py-10">Loading cart items...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Failed to load cart items.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-6">
        {isSuccess &&
          cart.map((item) => (
            <div key={item._id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
              <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md" />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                {/* Sale price if available */}
                <p className="text-gray-600">
                  ${item.salePrice.toFixed(2)}{' '}
                  {item.salePrice < item.price && (
                    <span className="text-sm text-gray-500 line-through ml-2">${item.price}</span>
                  )}
                </p>
              </div>

              {/* Quantity Control */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decrementQuantity(item.productId)}
                  className="px-3 py-1 bg-gray-300 rounded-full text-gray-700 hover:bg-gray-400"
                >
                  <FaMinus />
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => incrementQuantity(item.productId)}
                  className="px-3 py-1 bg-gray-300 rounded-full text-gray-700 hover:bg-gray-400"
                >
                  <FaPlus />
                </button>
              </div>

              {/* Item Total Price */}
              <div className="ml-4 text-gray-800 font-semibold">
                ${(item.salePrice * item.quantity).toFixed(2)}
              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleDeleteItem(item.productId)}
                className="text-red-600 px-2 hover:text-red-800"
              >
                <FaTrash />
              </button>
            </div>
          ))}
      </div>

      {/* Cart Total Price */}
      <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <span className="text-lg font-semibold">Total Price:</span>
        <span className="text-xl font-bold">${calculateTotal()}</span>
      </div>

      {/* Checkout Button */}
      <div className="mt-6">
        <Link to="/checkout" className="w-full py-3 px-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default AddToCart;
