"use client";

import { useState } from "react";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import NavigationLinksForDynamicPages from "@/app/components/NavigationLinksForDynamicPages";
import AddToCartButton from "@/app/components/Cart/AddToCartButton";

interface ProductDetailsProps {
  product: {
    id: number;
  title: string;
  code: string;
  price: number;
  discountedPrice?: number;
  colors: string[];
  images: { [key: string]: string };
  slug: string;
  size?: string; // Add size if it's optional
  };
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { title, price, colors, images } = product;
  // const [mainImage, setMainImage] = useState(colors[0]);
  const [hoverStyle, setHoverStyle] = useState<{ backgroundPosition: string; backgroundSize?: string }>({ backgroundPosition: "center" });

  const [selectedColor, setSelectedColor] = useState(colors.length > 0 ? colors[0] : ""); // Default to the first color
const [selectedSize, setSelectedSize] = useState(product.size || ""); // Default size if provided

    const [mainImage, setMainImage] = useState(colors.length > 0 ? colors[0] : ''); // Initialize with the first color if available


  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setHoverStyle({
      backgroundSize: '200%', // Adjust the zoom level as needed
      backgroundPosition: `${x}% ${y}%`,
    });
  };

  return (
    <div className="max-w-[1700px] mx-auto p-4">
      {/* Breadcrumb Navbar */}
      <div className="bg-[#F6F5FF] h-[286px] w-full p-9 pl-40 pt-16 ">
        <h2 className="text-left text-[#151875] text-5xl font-bold mb-8">
          Product Details
        </h2>
        <nav className="flex pl-4 items-center space-x-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 font-semibold">
            Home
          </Link>
          <span>.</span>
          <Link href="/pages" className="hover:text-gray-900 font-semibold">
            Pages
          </Link>
          <span>.</span>
          <span className="text-[#F24E1E] font-semibold">Product Details</span>
        </nav>
      </div>

      {/* Product Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 py-11 max-w-6xl mx-auto shadow-lg shadow-gray-300 rounded-lg bg-[#F6F5FF]">
  
  {/* Left Section */}
  <div className="flex flex-col items-center md:flex-row md:items-start">
    {/* Mini Images - Left Section */}
    <div className="flex flex-row md:flex-col mt-6 space-x-5 md:space-x-0 md:space-y-5 mr-4 mb-4 md:mb-0">
      {colors.slice(0, 3).map((color, index) => (
        <div
          key={index}
          onClick={() => setMainImage(color)}
          className={`w-24 h-24 md:w-32 md:h-32 rounded-md bg-cover bg-center cursor-pointer border ${mainImage === color ? "" : "border-gray-300"}`}
          style={{ backgroundImage: `url(${images[color]})` }}
        ></div>
      ))}
    </div>

    {/* Main Image - Right Section */}
    <div
      className="relative w-full md:w-[375px] h-[350px] md:h-[487px] bg-cover bg-no-repeat rounded-md"
      style={{
        backgroundImage: `url(${images[mainImage]})`,
        ...hoverStyle,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoverStyle({ backgroundPosition: "center" })}
    ></div>
  </div>

  {/* Right Section */}
  <div className="space-y-3 mt-9 px-4 md:px-0">
    {/* Title */}
    <h1 className="text-2xl md:text-3xl font-bold text-[#0c0c0c]">{title}</h1>

    {/* Ratings */}
    <div className="flex items-center space-x-2 text-lg">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-yellow-500">&#9733;</span>
        ))}
      </div>
      <span className="text-gray-500 text-sm">(22)</span>
    </div>

    {/* Price */}
    <div className="flex items-center space-x-2">
      <span className="text-lg font-bold text-[#151875]">${price.toFixed(2)}</span>
      <span className="text-sm line-through text-[#F24E1E]">${(price + 10).toFixed(2)}</span>
    </div>

    {/* Colors */}
    <div className="space-y-1 flex items-center gap-5">
      <p className="text-sm font-medium text-[#151875]">Colors</p>
      <div className="flex space-x-2">
        {colors.map((color, index) => (
          <button
            key={index}
            className={`h-6 w-6 rounded-full border ${mainImage === color ? "ring-2 ring-black/70" : ""}`}
            style={{ backgroundColor: color }}
            onClick={() => setMainImage(color)}
          ></button>
        ))}
      </div>
    </div>

    {/* Description */}
    <p className="text-sm text-gray-500">
      This chair is perfect for modern interiors and provides unmatched comfort.
    </p>

    {/* Add to Cart */}
    <div className="flex space-x-4 items-center">
    <AddToCartButton
      key={product.id}
      product={{
        ...product,
        id: product.id.toString(),
        name: product.title,
        price: product.price,
        imageUrl: product.images[selectedColor],
        colors: product.colors,
        size: selectedSize, // Pass selected size
      }}
      showText={true}
      selectedColor={selectedColor} // Pass selected color
    
    />
    
      {/* <button className="text-[#0d0f43] font-[600] px-4 py-2 rounded-md">Add to Cart</button> */}
      <button className="p-2 rounded-full">
        <FontAwesomeIcon icon={faHeart} className="text-[#151875]" />
      </button>
    </div>

    {/* Categories */}
    <p className="text-sm">
      <span className="text-[#0d0f43] text-base font-[600]">Categories:</span> Chairs, Modern
    </p>

    {/* Tags */}
    <p className="text-sm">
      <span className="font-[600] text-base text-[#0d0f43]">Tags:</span> Comfort, Stylish
    </p>

    {/* Social Share */}
    <div className="space-y-1 flex items-center gap-5">
      <p className="text-base font-[600] text-[#0d0f43]">Share:</p>
      <div className="flex space-x-4">
        <button className="text-blue-500 z-[999]">
          <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:scale-105 hover:text-[#0d0f43]"/>
        </button>
        <button className="text-red-500 z-[999]">
          <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:scale-105 hover:text-[#0d0f43]"/>
        </button>
        <button className="text-blue-500 z-[999]">
          <FontAwesomeIcon icon={faTwitter} className="text-2xl hover:scale-105 hover:text-[#0d0f43]"/>
        </button>
      </div>
    </div>
  </div>
</div>

     
    <NavigationLinksForDynamicPages/>

    </div>
  );
}