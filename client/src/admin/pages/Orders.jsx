import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of orders to display per page

  // Sample orders data
  useEffect(() => {
    const fetchedOrders = [
      { id: 1, customerName: 'John Doe', items: 3, total: 150, status: 'Shipped' },
      { id: 2, customerName: 'Jane Smith', items: 2, total: 90, status: 'Pending' },
      { id: 3, customerName: 'Samuel Adams', items: 5, total: 250, status: 'Delivered' },
      { id: 4, customerName: 'Emily Davis', items: 1, total: 45, status: 'Canceled' },
      { id: 5, customerName: 'Michael Johnson', items: 4, total: 120, status: 'Shipped' },
      { id: 6, customerName: 'Sarah Lee', items: 2, total: 80, status: 'Pending' },
      { id: 7, customerName: 'David Harris', items: 6, total: 300, status: 'Delivered' },
      { id: 8, customerName: 'Linda Clark', items: 3, total: 120, status: 'Shipped' },
      { id: 9, customerName: 'Robert Brown', items: 1, total: 50, status: 'Canceled' },
      { id: 10, customerName: 'Jessica Wilson', items: 2, total: 110, status: 'Pending' },
    ];

    setOrders(fetchedOrders);
    setLoading(false);
  }, []);

  // Pagination Logic
  const indexOfLastOrder = page * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const totalPages = Math.ceil(orders.length / itemsPerPage);
  
  const paginate = (pageNumber) => setPage(pageNumber);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="text-3xl font-bold mb-6">Orders Management</div>

      {loading ? (
        <div>Loading orders...</div>
      ) : (
        <>
          {/* Orders Table */}
          <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="px-6 py-4 text-sm font-semibold text-gray-800">Order ID</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-800">Customer</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-800">Items</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-800">Total</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-800">Status</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order) => (
                <tr key={order.id} className="border-t border-gray-200">
                  <td className="px-6 py-4 text-sm text-gray-700">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{order.customerName}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{order.items}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">${order.total}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{order.status}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Edit</button>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-md">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="mt-4 flex justify-center items-center space-x-2">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className={`px-4 py-2 rounded-md ${page === 1 ? 'bg-gray-400 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              disabled={page === 1}
            >
              <FaChevronLeft />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className={`px-4 py-2 rounded-md ${page === totalPages ? 'bg-gray-400 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              disabled={page === totalPages}
            >
              <FaChevronRight />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
