import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto items-center px-4 py-2 flex  justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <a href="#">ShopLogo</a>
        </div> 
          
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className=" relative">
            <a href="#" className="hover:text-blue-600">Home</a>
            {/* Dropdown Menu */}
            
          </li>
          <li><a href="#" className="hover:text-blue-600">Shop</a></li>
          <li><a href="#" className="hover:text-blue-600">Deals</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Search Bar */}
        <div className="hidden md:flex  mx-4">
          <input 
            type="text" 
            placeholder="Search for products..." 
            className=" px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-4">
          <button className="relative">
            <FaHeart className="text-2xl text-gray-700 hover:text-blue-600" />
          </button>
          <button className="relative">
            <FaShoppingCart className="text-2xl text-gray-700 hover:text-blue-600" />
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </button>
          <button>
            <FaUser className="text-2xl text-gray-700 hover:text-blue-600" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-3xl focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-white shadow-md md:hidden">
          <ul className="flex flex-col space-y-2 py-4 px-4 text-gray-700 font-medium">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Shop</a></li>
            <li><a href="#" className="hover:text-blue-600">Deals</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            <li>
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
