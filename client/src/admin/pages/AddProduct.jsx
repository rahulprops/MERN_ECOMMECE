import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    category: '',
    brand: '',
    price: '',
    salePrice: '',
    totalStock: '',
  });

  const categoryList = ['Electronics', 'Clothing', 'Accessories', 'Home Appliances'];
  const brandList = ['Apple', 'Samsung', 'Sony', 'LG'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Data:', product);
    alert('Product added successfully!');
    // Add logic to submit product data to the backend
  };

  return (
    <div className="p-6 w-full bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Add Product</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium mb-1" htmlFor="title">
            Product Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={product.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter product title"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter product description"
            rows="4"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          >
            <option value="" disabled>
              Select category
            </option>
            {categoryList.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Brand */}
        <div>
          <label className="block font-medium mb-1" htmlFor="brand">
            Brand
          </label>
          <select
            id="brand"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          >
            <option value="" disabled>
              Select brand
            </option>
            {brandList.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter product price"
            required
          />
        </div>

        {/* Sale Price */}
        <div>
          <label className="block font-medium mb-1" htmlFor="salePrice">
            Sale Price
          </label>
          <input
            type="number"
            id="salePrice"
            name="salePrice"
            value={product.salePrice}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter sale price"
            required
          />
        </div>

        {/* Total Stock */}
        <div>
          <label className="block font-medium mb-1" htmlFor="totalStock">
            Total Stock
          </label>
          <input
            type="number"
            id="totalStock"
            name="totalStock"
            value={product.totalStock}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter total stock"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
