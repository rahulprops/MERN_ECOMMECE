import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const products = [
  { id: 1, name: "Product A", brand: "Brand 1", category: "man", price: 100 },
  { id: 2, name: "Product B", brand: "Brand 2", category: "wowen", price: 200 },
  { id: 3, name: "Product C", brand: "Brand 1", category: "kids", price: 150 },
  { id: 4, name: "Product D", brand: "Brand 3", category: "others", price: 250 },
];

const categories = ["man", "women", "kids","others"];
const brands = ["Brand 1", "Brand 2", "Brand 3"];

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get("category") ? searchParams.get("category").split(",") : []
  );
  const [selectedBrands, setSelectedBrands] = useState(
    searchParams.get("brand") ? searchParams.get("brand").split(",") : []
  );
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "default");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    // Update URL query parameters
    const params = {};
    if (selectedCategories.length) params.category = selectedCategories.join(",");
    if (selectedBrands.length) params.brand = selectedBrands.join(",");
    if (sortBy !== "default") params.sort = sortBy;
    setSearchParams(params);

    // Filter and sort products
    let filtered = products;

    if (selectedCategories.length) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedBrands.length) {
      filtered = filtered.filter((p) => selectedBrands.includes(p.brand));
    }

    if (sortBy === "priceLowHigh") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    }

    if (sortBy === "priceHighLow") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [selectedCategories, selectedBrands, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((item) => item !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Categories</h3>
          <ul>
            {categories.map((category) => (
              <li key={category} className="mb-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">{category}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Brands */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Brands</h3>
          <ul>
            {brands.map((brand) => (
              <li key={brand} className="mb-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={brand}
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">{brand}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        {/* Sorting */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Products</h2>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="default">Sort By</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
          </select>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-600">Brand: {product.brand}</p>
              <p className="text-gray-600">Category: {product.category}</p>
              <p className="text-blue-600 font-bold">${product.price}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <p className="text-gray-600 text-center mt-6">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Filter;
