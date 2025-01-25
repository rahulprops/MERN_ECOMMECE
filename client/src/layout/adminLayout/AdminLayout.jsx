import React from 'react';
import Sidebar from '../../admin/Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1 mt-15">
        {/* Sidebar */}
        <div className="sticky top-0 h-screen">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
