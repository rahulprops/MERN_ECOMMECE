import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCog,
  FaUsers,
  FaPlusCircle,
  FaListAlt,
  FaChartBar,
  FaPowerOff,
  FaBoxOpen,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false); // Sidebar collapse state
  const [productMenuOpen, setProductMenuOpen] = useState(false); // Product menu toggle state

  const toggleSidebar = () => setCollapsed(!collapsed); // Toggle sidebar collapse
  const toggleProductMenu = () => setProductMenuOpen(!productMenuOpen); // Toggle product submenu

  return (
    <div
      className={`flex ${
        collapsed ? "w-16" : "w-64"
      } transition-all duration-300 bg-blue-800 text-white min-h-screen`}
    >
      <div className="flex flex-col w-full">
        {/* Toggle Button */}
        <div className="flex justify-between items-center p-4">
          <button onClick={toggleSidebar} className="text-white">
            <span className="text-xl">{collapsed ? ">" : "<"}</span>
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex-1">
          <ul className="space-y-6 p-4">
            {/* Dashboard Link */}
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  `flex items-center space-x-3 ${
                    isActive ? "text-yellow-500" : "text-gray-300"
                  } hover:text-white`
                }
              >
                <FaHome className="text-xl" />
                {!collapsed && <span>Dashboard</span>}
              </NavLink>
            </li>

            {/* Product Menu */}
            <li>
              <div
                onClick={toggleProductMenu}
                className="flex items-center justify-between space-x-3 cursor-pointer text-gray-300 hover:text-white"
              >
                <div className="flex items-center space-x-3">
                  <FaBoxOpen className="text-xl" />
                  {!collapsed && <span>Product</span>}
                </div>
                {!collapsed &&
                  (productMenuOpen ? <FaChevronUp /> : <FaChevronDown />)}
              </div>
              {/* Submenu */}
              {productMenuOpen && (
                <ul
                  className={`ml-8 mt-2 space-y-2 ${collapsed ? "hidden" : ""}`}
                >
                  <li className=" mt-5">
                    <NavLink
                      to="/admin/add-product"
                      className={({ isActive }) =>
                        `text-sm flex items-center space-x-2 ${
                          isActive ? "text-yellow-500" : "text-gray-300"
                        } hover:text-white`
                      }
                    >
                      <FaPlusCircle className="text-xl" />
                      <span>Add Product</span>
                    </NavLink>
                  </li>
                  <li className=" mt-5">
                    <NavLink
                      to="/admin/list-product"
                      className={({ isActive }) =>
                        `text-sm flex items-center space-x-2 ${
                          isActive ? "text-yellow-500" : "text-gray-300"
                        } hover:text-white`
                      }
                    >
                      <FaListAlt className="text-xl" />
                      <span>List Product</span>
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            {/* Users Link */}
            <li>
              <NavLink
                to="/admin/users"
                className={({ isActive }) =>
                  `flex items-center space-x-3 ${
                    isActive ? "text-yellow-500" : "text-gray-300"
                  } hover:text-white`
                }
              >
                <FaUsers className="text-xl" />
                {!collapsed && <span>Users</span>}
              </NavLink>
            </li>

            {/* Reports Link */}
            <li>
              <NavLink
                to="/admin/reports"
                className={({ isActive }) =>
                  `flex items-center space-x-3 ${
                    isActive ? "text-yellow-500" : "text-gray-300"
                  } hover:text-white`
                }
              >
                <FaChartBar className="text-xl" />
                {!collapsed && <span>Reports</span>}
              </NavLink>
            </li>

            {/* Settings Link */}

            {/* Logout Link */}
            <li>
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  `flex items-center space-x-3 ${
                    isActive ? "text-yellow-500" : "text-gray-300"
                  } hover:text-white`
                }
              >
                <FaPowerOff className="text-xl" />
                {!collapsed && <span>Logout</span>}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
