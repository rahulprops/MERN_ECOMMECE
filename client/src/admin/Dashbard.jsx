import React from 'react';
import { FaUserAlt, FaDollarSign, FaChartLine, FaClipboardList } from 'react-icons/fa'; // Importing icons from react-icons

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen ">
      {/* Dashboard Header */}
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
      </header>

      {/* Dashboard Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Users */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="text-blue-600 text-3xl">
            <FaUserAlt />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Total Users</h2>
            <p className="text-gray-700 text-2xl">1,250</p>
          </div>
        </div>

        {/* Total Sales */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="text-green-600 text-3xl">
            <FaDollarSign />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Total Sales</h2>
            <p className="text-gray-700 text-2xl">$15,600</p>
          </div>
        </div>

        {/* Revenue Growth */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="text-yellow-600 text-3xl">
            <FaChartLine />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Revenue Growth</h2>
            <p className="text-gray-700 text-2xl">+12%</p>
          </div>
        </div>

        {/* Pending Orders */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="text-red-600 text-3xl">
            <FaClipboardList />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Pending Orders</h2>
            <p className="text-gray-700 text-2xl">50</p>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <div className="text-gray-700">User John Doe signed up</div>
              <div className="text-sm text-gray-500">2 hours ago</div>
            </li>
            <li className="flex justify-between items-center">
              <div className="text-gray-700">Order #12345 placed by User</div>
              <div className="text-sm text-gray-500">4 hours ago</div>
            </li>
            <li className="flex justify-between items-center">
              <div className="text-gray-700">Product 'XYZ' went out of stock</div>
              <div className="text-sm text-gray-500">1 day ago</div>
            </li>
            <li className="flex justify-between items-center">
              <div className="text-gray-700">User Jane Smith updated profile</div>
              <div className="text-sm text-gray-500">2 days ago</div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
