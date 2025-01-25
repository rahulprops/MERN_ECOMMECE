import React from 'react';

const Wishlist = () => {
  // Sample wishlist data
  const wishlistItems = [
    { id: 1, name: 'Product 1', image: '/images/product1.jpg', price: '$99.99' },
    { id: 2, name: 'Product 2', image: '/images/product2.jpg', price: '$149.99' },
    { id: 3, name: 'Product 3', image: '/images/product3.jpg', price: '$199.99' },
  ];

  const handleRemove = (id) => {
    // Handle item removal from wishlist logic here
    console.log(`Remove item with id: ${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Your Wishlist</h2>

      {/* Wishlist Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600">{item.price}</p>

              {/* Remove Button */}
              <button
                onClick={() => handleRemove(item.id)}
                className="mt-4 text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty Wishlist Message */}
      {wishlistItems.length === 0 && (
        <div className="text-center py-6">
          <p className="text-gray-500 text-lg">Your wishlist is empty. Add some products!</p>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
