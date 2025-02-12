'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import Breadcrumb from '@/app/components/BreadCrumb';
import Brands from '@/app/components/Home/brands';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '@/app/redux/cartSlice'; // Adjust the import based on your file structure

const OrderCompleted = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Clear the cart when the order is completed
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <>
      <Breadcrumb
        mainHeading="Order Completed"
        miniHeadings={['Home', 'pages', 'Order Completed']}
      />

      <div className="flex flex-col md:flex-row h-screen max-w-[2150px] mx-auto bg-gray-100 dark:bg-gray-900">
        <div className="flex-1 p-4 flex items-start justify-center mt-20 md:mt-40 ml-11">
          <Image
            src="/con1.png" 
            alt="Left Mini Image"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        <div className="flex-1 p-4 flex flex-col items-center justify-center text-center">
          <div className="mb-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
            <FaCheck size={54} className='text-white' />
          </div>
          <h2 className="text-4xl font-semibold text-[#1D1D1D] dark:text-white mb-4 capitalize">Your Order is Confirmed</h2>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            Thank you for your purchase! We will contact you soon. <br /> 
            Within 6 hours, you will receive an email confirmation when your order is ready.
          </p>
          <Link href="/" className="bg-pink-600 capitalize text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition duration-300 shadow-md">
            Continue Shopping
          </Link>
        </div>

        <div className="flex-1 p-4 flex items-end justify-center mb-11">
          <Image
            src="/con2.png" 
            alt="Right Mini Image"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      </div>

      <Brands />
    </>
  );
}

export default OrderCompleted;