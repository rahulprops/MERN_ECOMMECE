import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const Reports = () => {
  // Data for Sales Chart (Bar Chart)
  const salesChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales ($)',
        data: [1200, 1900, 800, 1500, 2200, 1800],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options for Sales Chart
  const salesChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales',
      },
    },
  };

  // Data for User Activity Chart (Line Chart)
  const userActivityData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Active Users',
        data: [50, 80, 100, 90, 120, 150, 130],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.4,
      },
    ],
  };

  // Options for User Activity Chart
  const userActivityOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'User Activity (Weekly)',
      },
    },
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Reports Dashboard</h2>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Total Sales</h3>
          <p className="text-2xl font-bold mt-2">$10,200</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Total Products Sold</h3>
          <p className="text-2xl font-bold mt-2">850</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">New Customers</h3>
          <p className="text-2xl font-bold mt-2">120</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Sales Chart */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
          <Bar data={salesChartData} options={salesChartOptions} />
        </div>

        {/* User Activity Chart */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">User Activity</h3>
          <Line data={userActivityData} options={userActivityOptions} />
        </div>
      </div>

      {/* Recent Sales Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <h3 className="text-xl font-bold p-4 bg-blue-800 text-white">Recent Sales</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-blue-200">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Amount ($)</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, product: 'Laptop', amount: 1200, date: '2025-01-20' },
                { id: 2, product: 'Smartphone', amount: 800, date: '2025-01-21' },
                { id: 3, product: 'Headphones', amount: 150, date: '2025-01-22' },
              ].map((sale) => (
                <tr key={sale.id} className="border-t hover:bg-gray-100">
                  <td className="px-4 py-2">{sale.id}</td>
                  <td className="px-4 py-2">{sale.product}</td>
                  <td className="px-4 py-2">{sale.amount}</td>
                  <td className="px-4 py-2">{sale.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
