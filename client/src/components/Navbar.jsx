import React, { useState } from "react";
import { FaBars, FaTimes, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useLoadUserQuery, useLogoutMutation } from "../features/apis/userApi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const { data, isSuccess } = useLoadUserQuery();
  const [logout, { isSuccess: isSuccessLogout }] = useLogoutMutation();
  const navigate = useNavigate();

  // console.log(user);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);

  // Handle logout
  const handleLogout = async () => {
    await logout();
    setUserMenuOpen(false); // Close the user menu after logout
    navigate("/"); // Navigate to the login page after logging out
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto items-center px-4 py-2 flex justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/" className="flex items-center gap-1">
            <FaHome /> E-Shop
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/filter?category=man" className="hover:text-blue-600">
              man
            </Link>
          </li>
          <li>
            <Link to="/filter?category=women" className="hover:text-blue-600">
              women
            </Link>
          </li>
          <li>
            <Link to="/filter?category=kids" className="hover:text-blue-600">
              kids
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="hidden md:flex mx-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* User/Login Button */}
        <div className="relative">
          {user ? (
            <>
              <div className="flex items-center space-x-4">
                <button className="relative">
                  <FaHeart className="text-2xl text-gray-700 hover:text-blue-600" />
                </button>
                <Link to="/addtocart" className="relative">
                  <FaShoppingCart className="text-2xl text-gray-700 hover:text-blue-600" />
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </Link>
                <button onClick={toggleUserMenu} className="cursor-pointer">
                  <FaUser className="text-2xl text-gray-700 hover:text-blue-600" />
                </button>
              </div>
            </>
          ) : (
            <button onClick={()=>navigate("/login")} className="px-4 py-2 bg-blue-600 text-white cursor-pointer rounded-md hover:bg-blue-700">
              Login
            </button>
          )}

          {/* Dropdown Menu */}
          {user && userMenuOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-56 border border-gray-200 transition-all duration-300 ease-in-out transform scale-100">
              <ul className="py-2">
                <li>
                  <button className="w-full text-center flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700 transition duration-150">
                    <Link className="font-medium">Profile</Link>
                  </button>
                </li>
                <li>
                  <button onClick={()=>{
                     navigate("/account")
                     setUserMenuOpen(!userMenuOpen);
                  }} className="w-full cursor-pointer flex items-center text-left px-4 py-2 hover:bg-gray-100 text-gray-700 transition duration-150">
                    <span className="font-medium">Account</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full cursor-pointer flex items-center text-left px-4 py-2 hover:bg-gray-100 text-red-600 transition duration-150"
                  >
                    <span className="font-medium">Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          )}
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
            <li>
              <a href="#" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Deals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Contact
              </a>
            </li>
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
