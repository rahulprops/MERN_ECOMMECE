import React, { useState } from 'react';

const Account = () => {
  const [activeTab, setActiveTab] = useState('order'); // Default tab is 'order'
  const [addressForm, setAddressForm] = useState({
    address: '',
    city: '',
    pincode: ''
  }); // To track form input

  const [addresses, setAddresses] = useState([
    { id: 1, address: '123 Main Street', city: 'City', pincode: '123456' },
    { id: 2, address: '456 Another Ave', city: 'City', pincode: '654321' },
    { id: 3, address: '789 Third St', city: 'City', pincode: '112233' },
  ]); // Dummy data for addresses

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., add or update the address)
    console.log(addressForm);
    // Update the address list (for now just adds the new address)
    setAddresses([...addresses, { ...addressForm, id: addresses.length + 1 }]);
    setAddressForm({ address: '', city: '', pincode: '' }); // Clear the form
  };

  const handleEdit = (id) => {
    const selectedAddress = addresses.find((address) => address.id === id);
    setAddressForm({
      address: selectedAddress.address,
      city: selectedAddress.city,
      pincode: selectedAddress.pincode
    });
  };

  const handleDelete = (id) => {
    const updatedAddresses = addresses.filter((address) => address.id !== id);
    setAddresses(updatedAddresses);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Tab Buttons */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setActiveTab('order')}
          className={`px-6 py-2 rounded-t-lg text-lg font-semibold ${
            activeTab === 'order' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Order
        </button>
        <button
          onClick={() => setActiveTab('address')}
          className={`px-6 py-2 rounded-t-lg text-lg font-semibold ${
            activeTab === 'address' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Address
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4 border border-gray-200 rounded-b-lg shadow-md">
        {activeTab === 'order' ? (
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Your Orders</h3>
            <p className="text-gray-600 mt-4">Here you can view your previous orders.</p>
            {/* Add order details here */}
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Your Address</h3>
            <p className="text-gray-600 mt-4">Here you can update your shipping address.</p>

            {/* Address Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {addresses.map((address) => (
                <div key={address.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
                  <h4 className="text-lg font-semibold">{`Address ${address.id}`}</h4>
                  <p className="text-sm text-gray-600 mt-2">{`${address.address}, ${address.city}, ${address.pincode}`}</p>
                  <div className="mt-4 flex justify-between">
                    <button
                      onClick={() => handleEdit(address.id)}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(address.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Address Form */}
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={addressForm.address}
                    onChange={handleInputChange}
                    className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    value={addressForm.city}
                    onChange={handleInputChange}
                    className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={addressForm.pincode}
                  onChange={handleInputChange}
                  className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Save Address
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
