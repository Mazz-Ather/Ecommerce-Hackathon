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
    image: '/s14.jpeg',
    discountedPrice: '$20.00',
    originalPrice: '$30.00',
    miniTitle: 'New Arrival',
    filter: 'New Arrival',
  },
  {
    id: 2,
    title: 'Product 2',
    image: '/s7.jpeg',
    discountedPrice: '$25.00',
    originalPrice: '$35.00',
    miniTitle: 'Best Seller',
    filter: 'New Arrival'
  },
  {
    id: 3,
    title: 'Product 3',
    image: '/s6.jpeg',
    discountedPrice: '$15.00',
    originalPrice: '$25.00',
    miniTitle: 'Featured',
   filter: 'New Arrival'
  },
  {
    id: 4,
    title: 'Product 4',
    image: '/s9.jpeg',
    discountedPrice: '$18.00',
    originalPrice: '$28.00',
    miniTitle: 'Special Offer',
 filter: 'New Arrival'
  },
  {
    id: 5,
    title: 'Product 5',
    image: '/s10.jpeg',
    discountedPrice: '$22.00',
    originalPrice: '$32.00',
    miniTitle: 'New Arrival',
   filter: 'New Arrival'
  },
  {
    id: 6,
    title: 'Product 6',
    image: '/s11.jpeg',
    discountedPrice: '$30.00',
    originalPrice: '$40.00',
    miniTitle: 'Best Seller',
  filter: 'New Arrival'
  },{
    id: 7,
    title: 'Product 6',
      image: '/s12.jpeg',
    discountedPrice: '$30.00',
    originalPrice: '$40.00',
    miniTitle: 'Best Seller',
  filter: 'Best Seller'
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
    <div className="py-10 max-w-[1440px] mx-auto px-10">
      <h2 className="text-center text-[#151875] text-5xl font-bold mb-5">Latest Products</h2>
      
      <div className="flex justify-center space-x-4 mb-5">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
  {filteredProducts.map((product) => (
    <div
      key={product.id}
      className="rounded-lg shadow-md w-[360px] h-[356px] relative overflow-hidden group" // 'group' class to handle hover effects
    >
      {/* Main Product Image */}
      <div className="w-[360px] h-[269px] mx-auto relative bg-[#F7F7F7]">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
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
{/* </div> */}

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
