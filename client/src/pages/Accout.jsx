import React, { useState, useEffect } from 'react';
import {
  useCreateAddressMutation,
  useDeleteAddressMutation,
  useFetchAddressQuery,
  useUpdateAddressMutation,
} from '../features/apis/addressApi';

const Account = () => {
  const [activeTab, setActiveTab] = useState('order');
  const [addressForm, setAddressForm] = useState({
    _id: null, // Track the ID for editing
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    notes: '',
  });
  const [isEditMode, setIsEditMode] = useState(false);

  // RTK Query hooks
  const { data: fetchedAddresses, isLoading, isError } = useFetchAddressQuery();
  const [createAddress] = useCreateAddressMutation();
  const [deleteAddress] = useDeleteAddressMutation();
  const [updateAddress] = useUpdateAddressMutation();
 

  const [addresses, setAddresses] = useState([]);
  const [addressId , setAddressId]=useState("")
  useEffect(() => {
    if (fetchedAddresses) {
      setAddresses(fetchedAddresses);
    }
  }, [fetchedAddresses]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditMode) {
      // Update existing address
      try {
        console.log(addressForm)
        await updateAddress({addressId,addressForm}).unwrap();
        alert('Address updated successfully!');
        setIsEditMode(false);
      } catch (error) {
        console.error('Error updating address:', error);
      }
    } else {
      // Create a new address
      try {
        await createAddress(addressForm).unwrap();
        alert('Address saved successfully!');
      } catch (error) {
        console.error('Error creating address:', error);
      }
    }
    setAddressForm({
      _id: null,
      address: '',
      city: '',
      state: '',
      pincode: '',
      phone: '',
      notes: '',
    });
  };

  const handleEdit = (id) => {
    const selectedAddress = addresses.find((address) => address._id === id);
    setAddressForm(selectedAddress);
    setAddressId(id)
    setIsEditMode(true); // Enable edit mode
  };

  const handleDelete = async (id) => {
    try {
      await deleteAddress(id).unwrap();
      alert('Address deleted successfully!');
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
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

      <div className="p-4 border border-gray-200 rounded-b-lg shadow-md">
        {activeTab === 'order' ? (
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Your Orders</h3>
            <p className="text-gray-600 mt-4">Here you can view your previous orders.</p>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Your Address</h3>
            <p className="text-gray-600 mt-4">Here you can update your shipping address.</p>

            {isLoading ? (
              <p>Loading addresses...</p>
            ) : isError ? (
              <p>Error loading addresses</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {addresses.map((address) => (
                  <div key={address._id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
                    <h4 className="text-lg font-semibold">{address.address}</h4>
                    <p className="text-sm text-gray-600 mt-2">{`${address.city}, ${address.pincode}`}</p>
                    <div className="mt-4 flex justify-between">
                      <button
                        onClick={() => handleEdit(address._id)}
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(address._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

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
                <div>
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
                <div>
                  <label className="block text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={addressForm.phone}
                    onChange={handleInputChange}
                    className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Notes</label>
                  <input
                    type="text"
                    name="notes"
                    value={addressForm.notes}
                    onChange={handleInputChange}
                    className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <button
                type="submit"
                className={`mt-6 w-full ${
                  isEditMode ? 'bg-yellow-500' : 'bg-indigo-600'
                } text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition duration-300`}
              >
                {isEditMode ? 'Update Address' : 'Save Address'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
