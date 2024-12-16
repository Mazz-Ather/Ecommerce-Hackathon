"use client";  // This makes it a client component

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import CartItem from './cartItem';
import router from 'next/router';
import { GiSofa } from 'react-icons/gi';
import { clearCart } from '@/app/redux/cartSlice';
import { toast } from 'react-toastify';

// Example of CartItem type definition
interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    title: string;
    // Add the following line
    imageUrl: string;  // Added imageUrl property
    description: string;
    size: string;

  }
const CartPage = () => {
  const handleClick = () => {
    // Show toast notification
    toast.success('Your cart is up to date, Sir!', {
      position: "bottom-left", // Position of the toast
      autoClose: 3000, // Duration before the toast closes
      hideProgressBar: true, // Hide progress bar
      closeOnClick: true, // Close on click
      pauseOnHover: true, // Pause on hover
      draggable: true, // Allow drag
    });
  };
  // 
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  // const handleUpdate = (id: string, quantity: number) => {
  //   const newQuantity = prompt("Enter new quantity:", quantity.toString());
  //   if (newQuantity && !isNaN(Number(newQuantity)) && Number(newQuantity) > 0) {
  //     dispatch(updateQuantity({ id, quantity: parseInt(newQuantity) }));
  //   }
  // Total price calculation
  const totalAmount = cart.items.reduce((acc: any, item: any) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-[#F6F5FF] max-w-[1750px] mx-auto p-9  pt-16">
    {/* Header Section */}
    <h2 className="text-left text-[#151875] text-4xl lg:text-5xl font-bold mb-8">Shopping Cart</h2>
  
    {/* Cart Navigation */}
    <nav className="flex pl-4 items-center space-x-2 text-sm text-gray-500 lg:pl-32">
      <Link href="/" className="hover:text-gray-900 font-semibold">
        Home
      </Link>
      <span>.</span>
      <Link href="/pages" className="hover:text-gray-900 font-semibold">
        Pages
      </Link>
      <span>.</span>
      <span className="text-[#F24E1E] font-semibold">Shopping Cart</span>
    </nav>
  
    {/* Main Content */}
    <div className="flex flex-col lg:flex-row max-w-full mx-auto px-4 sm:px-6 lg:px-8 mt-20">
  
      {/* Left Section - Cart Items */}
      <div className="w-full">
        {cart.items.length === 0 ? (
          <div className="h-[70vh] flex flex-col justify-center items-center text-center space-y-4">
            <FaShoppingCart className="text-7xl text-gray-400 mb-4 animate-bounce" />
            <p className="text-2xl text-gray-600 font-bold">
              Oops! Your cart is empty. <span className="text-yellow-500">😢</span>
            </p>
            <p className="text-gray-500 text-lg">
              But don&apos;t worry, we&apos;ve got amazing things waiting for you!
              <br />
              <span className="font-semibold flex text-[#2F1AC4]">
                How about trying a cozy sofa? Just one purchase, and it&apos;s yours forever!
                <span className="ml-1 flex justify-center items-center mt- text-2xl text-black"><GiSofa /></span>
              </span>
            </p>
           <Link href="/pages/shopLeft" className="px-6 py-3 bg-[#2F1AC4]  text-white text-lg font-bold rounded-lg shadow-md hover:bg-purple-600 transition-all duration-300 cursor-pointer hover:scale-105">
              Browse Our Collection
           </Link>
          </div>
        ) : (
          <>
            <div className="lg:w- p-4 mt-10 lg:mt-0 py-10 lg:py-20">
              {/* Headings */}
              <div className="grid grid-cols-4 gap-4 mb-4 text-center sm:text-left">
                <h2 className="text-xl font-bold text-[#151875]">Product</h2>
                <h4 className="text-lg font-semibold text-[#151875]">Price</h4>
                <h4 className="text-lg font-semibold text-[#151875]">Quantity</h4>
                <h4 className="text-lg font-semibold text-[#151875]">Total</h4>
              </div>
  
              {/* Cart Items */}
              {cart.items.map((item: any) => (
                <div
                  key={item.id}
                  className="border p-4 mb-4 grid grid-cols-4 gap-4 items-center text-center sm:text-left"
                >
                  {/* Product Info */}
                  <div className="flex items-center">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-20 h-20 mr-4"
                    />
                    <div>
                    {item.title ? (
                        <h3 className="text-[17px] text-[#151875] font-semibold">{item.title}</h3>
                      ) : (
                        <h3 className="text-[17px] text-[#151875] font-semibold">{item.name}</h3>
                      )}
                      {item.size && (
                        <p className="text-sm text-[#151875]">Size: {item.size}</p>
                      )}
                      {item.colors && item.colors.length > 0 && (
                        <p className="text-sm text-[#151875]">
                          Colors: {item.colors.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
  
                  {/* Price */}
                  <p className="text-lg">${item.price}</p>
  
                  {/* Quantity Controls */}
                  <div className="flex items-center justify-center sm:justify-start">
                    <button
                      onClick={() =>
                        dispatch({ type: "cart/decreaseQuantity", payload: item.id })
                      }
                      className="border px-2"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch({ type: "cart/increaseQuantity", payload: item.id })
                      }
                      className="border px-2"
                    >
                      +
                    </button>
                  </div>
  
                  {/* Total Price */}
                  <p className="text-lg">${(item.quantity * item.price).toFixed(2)}</p>
                </div>
              ))}
  
              {/* Cart Actions */}
              <div className="flex justify-between mt-4">
                  {/* <p>{product.name}</p> */}
      {/* <p>Quantity: {product.quantity}</p> */}
  <button className='bg-pink-500 text-white px-4 py-2 rounded-lg'
     onClick={handleClick} // Handle click to show toast
    
  >
    Update Cart
    </button>

                <button
                  onClick={() => dispatch(clearCart())}
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg"
                  >
                  Clear Cart
                </button>
                  </div>
              </div>
            {/* </div> */}
          </>
        )}
      </div>
  
      {/* Right Section - Cart Summary */}
      {cart.items.length > 0 && (
        <div className="flex flex-col lg:w-1/3 p-4 mt-10 lg:mt-0 py-10 lg:py-8 gap-16">
          {/* Cart Total */}
          <h2 className="text-2xl text-center font-semibold text-[#242896]">Cart Total</h2>
          <div className="border p-4 flex flex-col gap-4 bg-[#FFF] rounded-lg w-full">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className='h-px w-full bg-gray-300' />
            <div className="flex justify-between">
              <span>Total:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className='h-px w-full bg-gray-300' />
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Agree to terms</span>
            </div>
            <button className="bg-green-500 text-white w-full py-2 mt-4">
              <Link href="/pages/checkout">Checkout</Link>
            </button>
          </div>
  
          {/* Shipping Info */}
          <div className="border p-4 flex flex-col gap-4 bg-gray-100 rounded-lg w-full">
            <h2 className="text-xl text-center font-semibold text-[#1A0B5B]">Calculate Shipping </h2>
            <div className="flex justify-between">
              <input type="text" placeholder='Country' className='bg-gray-100 p-2 w-full' />
            </div>
            <div className='h-px w-full bg-gray-300' />
            <div className="flex justify-between">
              <input type="text" placeholder='Address' className='bg-gray-100 p-2 w-full' />
            </div>
            <div className='h-px w-full bg-gray-300' />
            <div className="flex justify-between">
              <input type="text" placeholder='Postal Code' className='bg-gray-100 p-2 w-full' />
            </div>
            <div className='h-px w-full bg-gray-300' />
            <div className="flex items-center">
              <button className='bg-pink-500 w-full text-white px-4 py-2'>Calculate Shipping</button>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  
  
  );
};

export default CartPage;