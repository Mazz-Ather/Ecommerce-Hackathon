'use client';
import Link from "next/link";
import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify'; // Make sure to install react-toastify
import Breadcrumb from "../components/BreadCrumb";
import Brands from "../components/Home/brands";

// Define the types for form data and errors
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  paymentMethod: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  country?: string;
}

const CheckoutPage = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "creditCard", // Default to credit card
  });

  const [errors, setErrors] = useState<FormErrors>({}); // For validation errors
  const [paypalUnavailable, setPaypalUnavailable] = useState<boolean>(false); // State to track PayPal availability

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Check if the selected payment method is PayPal
    if (name === "paymentMethod" && value === "paypal") {
      setPaypalUnavailable(true); // Show PayPal unavailable message
    } else {
      setPaypalUnavailable(false); // Hide message for other payment methods
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {}; // Initialize newErrors with the correct type
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.postalCode) newErrors.postalCode = "Postal Code is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Show toast notification
    toast.success("Order Placing..... ( Please Wait)", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      isLoading: true,
      draggable: true,
    });

    // Redirect to order page after a short delay
    setTimeout(() => {
      window.location.href = "/pages/orderCompleted"; // Redirect to order page
    }, 5000);
  };

  return (
    <>
      <Breadcrumb
        mainHeading="Checkout"
        miniHeadings={['Home', 'pages', 'Checkout']}
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 lg:p-12">
          <h1 className="text-3xl font-bold text-center text-[#1D3178] dark:text-white mb-8">Billing Information</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your full name"
                required
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your email"
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your phone number"
                required
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your address"
                required
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleInputChange}
                className={`mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your city"
                required
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>

            {/* Postal Code */}
            <div>
              <label htmlFor="postalCode" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Postal Code
              </label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className={`mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none ${errors.postalCode ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your postal code"
                required
              />
              {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode}</p>}
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                value={formData.country}
                onChange={handleInputChange}
                className={`mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your country"
                required
              />
              {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
            </div>

            {/* Payment Method */}
            <div>
              <label htmlFor="paymentMethod" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                id="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none"
                required
              >
                {/* <option value="creditCard">Credit Card</option> */}
                <option value="cash">Cash on Delivery</option>
                <option value="paypal">PayPal</option>
              </select>
              {paypalUnavailable && <p className="text-red-500 text-base p-2">Sorry, PayPal is currently unavailable (we are working on this).</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formData.paymentMethod === "paypal"} // Disable button if PayPal is selected
              className={`w-full py-3 rounded-md font-semibold ${formData.paymentMethod === "paypal" ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-400 hover:bg-pink-600'} text-white`}
            >
              Confirm Order
            </button>
          </form>
        </div>
      </div>
      <ToastContainer /> {/* Add this line to render the toast notifications */}
      <Brands />
    </>
  );
};

export default CheckoutPage;