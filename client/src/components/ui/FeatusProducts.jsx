import React from 'react';

// Dummy data for products
const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    title: 'Product 1',
    description: 'This is a description of Product 1.',
    price: 100,
    salePrice: 80,
    rating: 4.5,
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    title: 'Product 2',
    description: 'This is a description of Product 2.',
    price: 120,
    salePrice: 100,
    rating: 3.5,
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    title: 'Product 3',
    description: 'This is a description of Product 3.',
    price: 90,
    salePrice: 70,
    rating: 4.0,
  },
  // Add more products as needed
];

const FeatusProducts = () => {
  // Render star ratings
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return (
      <>
        {Array(fullStars).fill('★').map((_, idx) => (
          <span key={`full-${idx}`} className="text-yellow-400">★</span>
        ))}
        {halfStar && <span className="text-yellow-400">☆</span>}
        {Array(emptyStars).fill('★').map((_, idx) => (
          <span key={`empty-${idx}`} className="text-gray-300">★</span>
        ))}
      </>
    );
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center text-4xl font-bold text-gray-800 mb-12">Featured Products</div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="text-xl font-bold text-gray-800">
                  ${product.salePrice}{' '}
                  {product.salePrice < product.price && (
                    <span className="text-sm text-gray-500 line-through ml-2">${product.price}</span>
                  )}
                </div>
                <button
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
              <div className="mt-2">{renderStars(product.rating)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatusProducts;
