import React from 'react';

const ListProduct = () => {
  // Mock data for demonstration
  const productData = [
    {
      id: 1,
      name: 'Laptop',
      category: 'Electronics',
      brand: 'Dell',
      price: 1200,
      stock: 50,
    },
    {
      id: 2,
      name: 'Smartphone',
      category: 'Electronics',
      brand: 'Samsung',
      price: 800,
      stock: 100,
    },
    {
      id: 3,
      name: 'Headphones',
      category: 'Accessories',
      brand: 'Sony',
      price: 150,
      stock: 200,
    },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Product List</h2>

      {/* Product Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Brand</th>
              <th className="px-4 py-2">Price ($)</th>
              <th className="px-4 py-2">Stock</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product) => (
              <tr key={product.id} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{product.id}</td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">{product.brand}</td>
                <td className="px-4 py-2">{product.price}</td>
                <td className="px-4 py-2">{product.stock}</td>
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

export default ListProduct;
