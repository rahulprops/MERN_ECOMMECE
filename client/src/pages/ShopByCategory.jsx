import React from 'react';
import { FaMale, FaFemale, FaChild, FaTshirt, FaShoePrints } from 'react-icons/fa'; // Import React Icons

const categories = [
  { name: 'Men', icon: <FaMale size={40} /> },
  { name: 'Women', icon: <FaFemale size={40} /> },
  { name: 'Kids', icon: <FaChild size={40} /> },
  { name: 'Accessories', icon: <FaTshirt size={40} /> },
  { name: 'Footwear', icon: <FaShoePrints size={40} /> },
];

const ShopByCategory = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center text-4xl font-bold text-gray-800 mb-12 capitalize">
        Shop By Categories
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-indigo-500/40"
          >
            <div className="text-4xl text-indigo-600 mb-4">
              {category.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-transparent opacity-30 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
