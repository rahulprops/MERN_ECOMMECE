import React, { useState } from 'react';

const AddToCart = () => {
  // Sample cart items data
  const initialCartItems = [
    { id: 1, name: 'Product 1', image: '/images/product1.jpg', price: 99.99, quantity: 1 },
    { id: 2, name: 'Product 2', image: '/images/product2.jpg', price: 149.99, quantity: 1 },
    { id: 3, name: 'Product 3', image: '/images/product3.jpg', price: 199.99, quantity: 1 },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  // Handle increment of quantity
  const incrementQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Handle decrement of quantity
  const decrementQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>

            {/* Quantity Control */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => decrementQuantity(item.id)}
                className="px-3 py-1 bg-gray-300 rounded-full text-gray-700 hover:bg-gray-400"
              >
                -
              </button>
              <span className="text-lg font-semibold">{item.quantity}</span>
              <button
                onClick={() => incrementQuantity(item.id)}
                className="px-3 py-1 bg-gray-300 rounded-full text-gray-700 hover:bg-gray-400"
              >
                +
              </button>
            </div>

            {/* Item Total Price */}
            <div className="ml-4 text-gray-800 font-semibold">
              ${ (item.price * item.quantity).toFixed(2) }
            </div>
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
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
