import React from 'react';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content Area */}
      <main className="flex-1  bg-white p-4 mt-12">
        <Outlet />
      </main>
       <div>
        <Footer/>
       </div>
    
    </div>
  );
};

export default MainLayout;
