import React from 'react';

const Users = () => {
  // Mock data for demonstration
  const userData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Customer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Customer' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">User Management</h2>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2 text-center space-x-4">
                  <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
