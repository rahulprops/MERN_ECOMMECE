import React from 'react';
import { useFetchAddressQuery } from '../../features/apis/addressApi';

const AddressCard = ({selectAddress}) => {
    const { data, isLoading, isError } = useFetchAddressQuery();

    // Handle Loading and Error States
    if (isLoading) return <div className="text-center p-4">Loading addresses...</div>;
    if (isError || !data || !Array.isArray(data)) return <div className="text-center p-4 text-red-500">Failed to load addresses</div>;

    return (
        <div className="grid grid-cols-2 gap-2">
            {data.map((address) => (
                <div key={address._id} onClick={()=>selectAddress(address)} className="border border-gray-300 p-4 rounded-lg shadow-md bg-white">
                    <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
                    <p><strong>Street:</strong> {address.address}</p>
                    <p><strong>City:</strong> {address.city}</p>
                    <p><strong>Pincode:</strong> {address.pincode}</p>
                    <p><strong>Phone:</strong> {address.phone}</p>
                    <p><strong>Notes:</strong> {address.notes}</p>
                </div>
            ))}
        </div>
    );
};

export default AddressCard;
