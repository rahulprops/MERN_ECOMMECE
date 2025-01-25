import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <img
          src="https://via.placeholder.com/300x200.png?text=404"
          alt="404"
          className="mx-auto mb-6 w-32 h-32 object-cover"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
