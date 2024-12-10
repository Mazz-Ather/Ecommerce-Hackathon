'use client';

import { FaCartPlus, FaHeart, FaSearchPlus } from 'react-icons/fa'; // Import icons from react-icons
import React from 'react';

const TrendingProduct = () => {
  const products = [
    {
      id: 1,
      title: 'Product 1',
      image: '/t1.png',
      discountedPrice: '$150.00',
      originalPrice: '$200.00',
    },
    {
      id: 2,
      title: 'Product 2',
      image: '/t2.png',
      discountedPrice: '$120.00',
      originalPrice: '$160.00',
    },
    {
      id: 3,
      title: 'Product 3',
      image: '/t3.png',
      discountedPrice: '$200.00',
      originalPrice: '$250.00',
    },
    {
      id: 4,
      title: 'Product 4',
      image: '/t4.png',
      discountedPrice: '$180.00',
      originalPrice: '$220.00',
    },
  ];

  return (

    <div className="py-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-11">
      <h2 className="text-center text-[#151875] text-3xl sm:text-4xl lg:text-[42px] font-bold mb-8">Trending Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-[270px] h-[360px] bg-white rounded-lg shadow-lg overflow-hidden group mx-auto relative"
          >
            <div className="w-full h-[244px] bg-[#F5F6F8] flex justify-center items-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
    
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 flex flex-col gap-4 items-center pb-20 pl-2">
              <div className="w-7 h-7 bg-indigo-500 text-white rounded-full flex justify-center items-center">
                <FaCartPlus className="text-base cursor-pointer" />
              </div>
              <div className="w-10 h-10 text-indigo-500 rounded-full flex justify-center items-center">
                <FaHeart className="text-xl cursor-pointer" />
              </div>
              <div className="w-7 h-7 text-indigo-500 rounded-full flex justify-center items-center border-2 border-indigo-500">
                <FaSearchPlus className="text-lg cursor-pointer" />
              </div>
            </div>
    
            <div className="p-4 flex flex-col justify-center items-center space-y-2">
              <h3 className="text-[#151875] text-lg sm:text-xl font-semibold text-center">
                {product.title}
              </h3>
              <div className="flex gap-2 items-center">
                <span className="text-[#151875] font-bold text-lg">
                  {product.discountedPrice}
                </span>
                <span className="text-gray-500 line-through text-sm">
                  {product.originalPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  
  
  );
};

export default TrendingProduct;
