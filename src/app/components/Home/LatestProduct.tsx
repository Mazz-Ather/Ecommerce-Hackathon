'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5';
const products = [
  // Sample product data
  {
    id: 1,
    title: 'Product 1',
    image: '/s19.jpeg',
    discountedPrice: '$20.00',
    originalPrice: '$30.00',
    miniTitle: 'Pink Sofa',
    filter: 'New Arrival',
  },
  {
    id: 2,
    title: 'Product 2',
    image: '/s7.jpeg',
    discountedPrice: '$25.00',
    originalPrice: '$35.00',
    miniTitle: 'Brown Sofa',
    filter: 'New Arrival'
  },
  {
    id: 3,
    title: 'Product 3',
    image: '/s20.jpeg',
    discountedPrice: '$15.00',
    originalPrice: '$25.00',
    miniTitle: 'pinkish Sofa',
   filter: 'New Arrival'
  },
  {
    id: 4,
    title: 'Product 4',
    image: '/s21.jpeg',
    discountedPrice: '$18.00',
    originalPrice: '$28.00',
    miniTitle: 'yellowish Sofa',
 filter: 'New Arrival'
  },
  {
    id: 5,
    title: 'Product 5',
    image: '/s10.jpeg',
    discountedPrice: '$22.00',
    originalPrice: '$32.00',
    miniTitle: 'greenish Sofa',
   filter: 'New Arrival'
  },
  {
    id: 6,
    title: 'Product 6',
    image: '/s23.jpeg',
    discountedPrice: '$30.00',
    originalPrice: '$40.00',
    miniTitle: 'blueish Sofa',
  filter: 'New Arrival'
  },{
    id: 7,
    title: 'Product 6',
      image: '/s12.jpeg',
    discountedPrice: '$30.00',
    originalPrice: '$40.00',
    miniTitle: 'greyish Sofa',
  filter: 'Best Seller'
  },{
    id: 8,
    title: 'Product 6',
      image: '/s13.jpeg',
    discountedPrice: '$30.00',
    originalPrice: '$40.00',
    miniTitle: 'redish Sofa',
  filter: 'Best Seller'
  },{
    id: 9,
    title: 'Product 6',
      image: '/s14.jpeg',
    discountedPrice: '$30.00',
    originalPrice: '$40.00',
    miniTitle: 'bluish Sofa',
  filter: 'Featured'
  },{
    id: 10,
    title: 'Product 6',
      image: '/s15.jpeg',
    discountedPrice: '$30.00',
    originalPrice: '$40.00',
    miniTitle: 'whitiish Sofa',
  filter: 'Featured'
  },{
    id: 11,
    title: 'Product 6',
      image: '/s16.jpeg',
    discountedPrice: '$30.00',
    originalPrice: '$40.00',
    miniTitle: 'brownish Sofa',
  filter: 'Best Seller'
  },
  {
    id: 12,
    title: 'Product 6',
      image: '/s17.jpeg',
    discountedPrice: '$30.00',
    originalPrice: '$40.00',
    miniTitle: 'bluish Sofa',
  filter: 'Special Offer'
  },
];

const filters = ['New Arrival', 'Best Seller', 'Featured', 'Special Offer'];

const LatestProduct = () => {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [filteredProducts, setFilteredProducts] = useState(products.filter(product => product.filter === activeFilter));

  const handleFilterChange = (filter:any) => {
    setActiveFilter(filter);
    setFilteredProducts(products.filter(product => product.filter === filter));
  };

  return (
    <div className="py-10 max-w-[1440px] mx-auto px-4 sm:px-10 overflow-hidden">
    <h2 className="text-center text-[#151875] text-5xl font-bold mb-5">Latest Products</h2>
    
    <div className="flex justify-center -space-x-4 sm:space-x-4 md:space-x-6 mb-5 ">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterChange(filter)}
          className={`px-4 py-2 rounded ${activeFilter === filter ? 'text-red-500 underline' : 'text-black'}`}
        >
          {filter}
        </button>
      ))}
    </div>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="rounded-lg shadow-md w-full h-[356px] relative overflow-hidden group" // 'group' class to handle hover effects
        >
          {/* Main Product Image */}
          <div className="w-full h-[269px] mx-auto relative bg-[#F7F7F7] hover:cursor-pointer">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-scale-down"
            />
  
            {/* Hover Icons (Bottom-Left) */}
            <div className="absolute left-4 bottom-4 hidden group-hover:flex flex-col items-center gap-4 transition duration-300">
              <button className="text-[#3F509E] bg-[#F7F7F7] px-2 py-2 rounded-full shadow-lg">
                <IoCartOutline className='w-5 h-5' />
              </button>
              <button className="text-[#3F509E] bg-transparent px-2 py-2 h-11 w-11 flex items-center justify-center">
                <IoHeartOutline className='w-6 h-6 mb-1' />
              </button>
              <button className="text-[#3F509E] bg-transparent px-2 py-2 h-11 w-11 flex items-center justify-center">
                <FontAwesomeIcon icon={faSearch} className='w-5 h-5' />
              </button>
            </div>
  
            {/* Two Images with Sale Text (Top-Left) */}
            <div className="absolute top-0 left-0 hidden group-hover:flex flex-col items-start gap-2">
              {/* First Image with Sale Text */}
              <div className="relative flex items-center">
                <img
                  src="/sale.png" // image
                  alt="Sale"
                  className="object-cover"
                />
                <span className="absolute text-white font-bold text-sm z-[999] inset-0 flex justify-center items-center -rotate-[17deg]">
                  Sale
                </span>
              </div>
            </div>
          </div>
  
          {/* Product Details */}
          <div className="p-4 py-7 flex justify-between items-center space-x-3">
            <h3 className="text-left text-lg font-semibold">{product.miniTitle}</h3>
            <div className="flex items-baseline gap-3">
              <span className="text-[#151875] font-bold">
                {product.discountedPrice}
              </span>
              <span className="text-[#FB2448] line-through text-sm">
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

export default LatestProduct;
