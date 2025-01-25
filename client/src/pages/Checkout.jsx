import React, { useState } from 'react';

const Checkout = () => {
  const [billingDetails, setBillingDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const [shippingDetails, setShippingDetails] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardName: '',
    expirationDate: '',
    cvv: '',
  });

  const [orderSummary, setOrderSummary] = useState({
    items: [
      { id: 1, name: 'Product 1', price: 100, quantity: 1 },
      { id: 2, name: 'Product 2', price: 200, quantity: 2 },
    ],
    shippingCost: 20,
    tax: 30,
    totalAmount: 0,
  });

  const handleInputChange = (e, section) => {
    const { name, value } = e.target;
    if (section === 'billing') {
      setBillingDetails((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else if (section === 'shipping') {
      setShippingDetails((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else if (section === 'payment') {
      setPaymentDetails((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const calculateTotalAmount = () => {
    const itemsTotal = orderSummary.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const total = itemsTotal + orderSummary.shippingCost + orderSummary.tax;
    setOrderSummary((prevState) => ({
      ...prevState,
      totalAmount: total,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing logic here
    console.log('Processing order...');
  };

  React.useEffect(() => {
    calculateTotalAmount();
  }, [orderSummary.items, orderSummary.shippingCost, orderSummary.tax]);

  return (
    <div className="container mx-auto p-6">
      <div className="text-3xl font-bold mb-6">Checkout</div>

      <form onSubmit={handleSubmit}>
        {/* Billing Information */}
        <div className="bg-white p-6 rounded-md shadow-md mb-6">
          <h3 className="text-2xl font-semibold mb-4">Billing Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={billingDetails.fullName}
                onChange={(e) => handleInputChange(e, 'billing')}
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={billingDetails.email}
                onChange={(e) => handleInputChange(e, 'billing')}
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={billingDetails.phone}
                onChange={(e) => handleInputChange(e, 'billing')}
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={billingDetails.address}
                onChange={(e) => handleInputChange(e, 'billing')}
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={billingDetails.city}
                onChange={(e) => handleInputChange(e, 'billing')}
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">State</label>
              <input
                type="text"
                name="state"
                value={billingDetails.state}
                onChange={(e) => handleInputChange(e, 'billing')}
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={billingDetails.postalCode}
                onChange={(e) => handleInputChange(e, 'billing')}
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="bg-white p-6 rounded-md shadow-md mb-6">
          <h3 className="text-2xl font-semibold mb-4">Shipping Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={shippingDetails.fullName}
                onChange={(e) => handleInputChange(e, 'shipping')}
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={shippingDetails.address}
                onChange={(e) => handleInputChange(e, 'shipping')}
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={shippingDetails.city}
                onChange={(e) => handleInputChange(e, 'shipping')}
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">State</label>
              <input
                type="text"
                name="state"
                value={shippingDetails.state}
                onChange={(e) => handleInputChange(e, 'shipping')}
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={shippingDetails.postalCode}
                onChange={(e) => handleInputChange(e, 'shipping')}
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-white p-6 rounded-md shadow-md mb-6">
          <h3 className="text-2xl font-semibold mb-4">Payment Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={(e) => handleInputChange(e, 'payment')}
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Cardholder Name</label>
              <input
                type="text"
                name="cardName"
                value={paymentDetails.cardName}
                onChange={(e) => handleInputChange(e, 'payment')}
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Expiration Date</label>
              <input
                type="text"
                name="expirationDate"
                value={paymentDetails.expirationDate}
                onChange={(e) => handleInputChange(e, 'payment')}
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">CVV</label>
              <input
                type="text"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={(e) => handleInputChange(e, 'payment')}
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-md shadow-md mb-6">
          <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {orderSummary.items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} (x{item.quantity})</span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between font-semibold">
              <span>Shipping</span>
              <span>${orderSummary.shippingCost}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Tax</span>
              <span>${orderSummary.tax}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${orderSummary.totalAmount}</span>
            </div>
          </div>
        </div>

        {/* Place Order Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
