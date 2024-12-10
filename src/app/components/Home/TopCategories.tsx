'use client';

import { useState, useEffect } from 'react';

const useItemsPerPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItemsPerPage(); // Set initial value
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  return itemsPerPage;
};

const itemsPerPage = window.innerWidth < 640 ? 2 : 4; // Basic logic for smaller screens

const TopCategories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const products = [
    { id: 1, image: '/cat1.png', title: 'Wood Chair', price: '$19.99' },
    { id: 2, image: '/cat2.png', title: 'Plastic Chair', price: '$29.99' },
    { id: 3, image: '/s8.jpeg', title: 'Luxury Sofa', price: '$19.99' },
    { id: 4, image: '/s9.jpeg', title: 'Luxurious Sofa', price: '$29.99' },
    { id: 5, image: '/s14.jpeg', title: 'Modern Sofa', price: '$19.99' },
    { id: 6, image: '/s4.jpeg', title: 'Arm Sofa', price: '$29.99' },
    { id: 7, image: '/s9.jpeg', title: 'Wood Sofa', price: '$39.99' },
    { id: 8, image: '/s6.jpeg', title: 'Kids Sofa', price: '$49.99' },
    { id: 9, image: '/s7.jpeg', title: 'Expensive Sofa', price: '$59.99' },
    { id: 10, image: '/s10.jpeg', title: 'Demanded Sofa', price: '$59.99' },
  ];

  const itemsPerPage = 4; // Maximum number of visible cards at a time.

  const handleNavigationClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 mb-9 mt-20">
         <h2 className="text-center text-[#151875] text-5xl font-bold mb-8">
        Top Categories
      </h2>
      {/* Product Container */}
      <div className="flex justify-center overflow-x-auto scrollbar-hide px-4 py-4">
        {products
          .slice(activeIndex * itemsPerPage, (activeIndex + 1) * itemsPerPage)
          .map((product) => (
            <div
              key={product.id}
              className="relative mx-4 flex-shrink-0 w-[50%]  sm:w-[50%] md:w-[22%] md:pl-8 lg:w-[22%] group"
            >
              {/* Product Image */}
              {/* shadow effect in left bottom  */}
              <div className="bg-white rounded-full p-6 hover:shadow-2xl hover:shadow-indigo-600 shadow-[9px_9px_10px_rgba(10,0,0,0.3)] transition-shadow duration-300 overflow-hidden group-hover:relative">
 
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-2xl w-full h-auto object-cover"
                />
                {/* Add to Cart Button - Visible on hover */}
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[999]">
                  Add to Cart
                </button>
              </div>
              {/* Title and Price outside the card */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-16 space-x-2">
        {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => handleNavigationClick(index)}
              className={`w-4 h-4 rounded-full border-2 ${
                index === activeIndex
                  ? 'bg-red-500 border-red-500'
                  : 'border-red-500'
              }`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TopCategories;
