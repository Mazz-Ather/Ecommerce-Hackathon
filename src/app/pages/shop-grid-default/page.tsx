'use client'

import { useState } from "react"
import { Heart, Search, ShoppingCart, ChevronRight } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import Brands from "@/app/components/Home/brands"

interface Product {
  id: number
  name: string
  images: {
    [key: string]: string
  }
  colors: string[]
  price: number
  discountedPrice?: number
}

const products: Product[] = [
  {
    id: 1,
    name: "Comfort Chair",
    images: {
      gray: "/p1.png",
      pink: "/p2.png",
      blue: "/p3.png",
    },
    colors: ["#D7D7D9", "#FB9DA7", "#2F1AC4"],
    price: 199.99,
    discountedPrice: 159.99,
  },
  {
    id: 2,
    name: "Modern Armchair",
    images: {
      pink: "/p2.png",
      blue: "/p4.png",
      gray: "/p5.png",
    },
    colors: ["#FB9DA7", "#2F1AC4", "#D7D7D9"],
    price: 249.99,
    discountedPrice: 199.99,
  },
  {
    id: 3,
    name: "Ergonomic Chair",
    images: {
      blue: "/p3.png",
      gray: "/p6.png",
      pink: "/p7.png",
    },
    colors: ["#2F1AC4", "#D7D7D9", "#FB9DA7"],
    price: 299.99,
  },
  {
    id: 4,
    name: "Travel Backpack",
    images: {
      black: "/p4.png",
      gray: "/p9.png",
      blue: "/p10.png",
    },
    colors: ["#000000", "#D7D7D9", "#2F1AC4"],
    price: 89.99,
    discountedPrice: 69.99,
  },{
    id: 1,
    name: "Comfort Chair",
    images: {
      gray: "/p1.png",
      pink: "/p2.png",
      blue: "/p3.png",
    },
    colors: ["#D7D7D9", "#FB9DA7", "#2F1AC4"],
    price: 199.99,
    discountedPrice: 159.99,
  },
  {
    id: 2,
    name: "Modern Armchair",
    images: {
      pink: "/p2.png",
      blue: "/p4.png",
      gray: "/p5.png",
    },
    colors: ["#FB9DA7", "#2F1AC4", "#D7D7D9"],
    price: 249.99,
    discountedPrice: 199.99,
  },
  {
    id: 3,
    name: "Ergonomic Chair",
    images: {
      blue: "/p3.png",
      gray: "/p6.png",
      pink: "/p7.png",
    },
    colors: ["#2F1AC4", "#D7D7D9", "#FB9DA7"],
    price: 299.99,
  },
  {
    id: 4,
    name: "Travel Backpack",
    images: {
      black: "/p4.png",
      gray: "/p9.png",
      blue: "/p10.png",
    },
    colors: ["#000000", "#D7D7D9", "#2F1AC4"],
    price: 89.99,
    discountedPrice: 69.99,
  },
]

function ProductCard({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [isHovered, setIsHovered] = useState(false)

  const getImageKeyForColor = (color: string) => {
    switch (color) {
      case "#D7D7D9":
        return "gray"
      case "#FB9DA7":
        return "pink"
      case "#2F1AC4":
        return "blue"
      case "#000000":
          return "black"
      default:
          return "gray"
    }
  }

  return (
      <div
      className="group relative flex flex-col py-9"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 hover:bg-[#d7d6db]">
        <Image
          src={product.images[getImageKeyForColor(selectedColor)]}
          alt={product.name}
          fill
          className="object-cover object-center"
        />
        {isHovered && (
          <div className="absolute bottom-4 left-4 flex flex-col space-y-2">
            <button className="rounded-full bg-white p-2 shadow-lg transition-transform hover:scale-110">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
            </button>
            <button className="rounded-full p-2  transition-transform hover:scale-110">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="rounded-full p-2  transition-transform hover:scale-110">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        )}
      </div>
      <div className="mt-4 flex flex-col items-center space-y-2">
  {/* Product Title */}
  <h3 className="text-lg font-medium text-[#151875] text-center">{product.name}</h3>

  {/* Color Options */}
  <div className="flex justify-center space-x-2">
    {product.colors.map((color) => (
      <button
        key={color}
        className={`h-4 w-4 rounded-full border ${
          selectedColor === color ? "ring-2 ring-gray-400" : ""
        }`}
        style={{ backgroundColor: color }}
        onClick={() => setSelectedColor(color)}
      />
    ))}
  </div>

  {/* Price Section */}
  <div className="flex items-center space-x-2">
    <span className="text-base font-medium text-[#151875]">
      ${product.discountedPrice?.toFixed(2) ?? product.price.toFixed(2)}
    </span>
    {product.discountedPrice && (
      <span className="text-base text-[#fb2e86] line-through">
        ${product.price.toFixed(2)}
      </span>
    )}
  </div>
  </div>
  </div>
)
}

export default function ShopGrid() {
  return (
    <div className="min-h-screen max-w-[1300px] mx-auto">
      {/* Header Section */}
   
     <div className="bg-[#F6F5FF] px-4 py-8 md:px-6 lg:px-8 h-[286px] flex items-center ">
        <div className="container mx-auto ml-20">
          <h1 className="mb-4 text-4xl font-bold text-[#151875]">Shop Grid Default</h1>
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#151875] hover:text-[#fb2e86]">
              Home
            </Link>
            {/* <span className="h-1 w-1 rounded-full bg-gray-400"></span> */}
            {/* <Link href="/pages/shop-grid-default" className="text-[#151875] hover:text-[#fb2e86]">
              Pages
            </Link> */}
            {/* <span className="h-1 w-1 rounded-full bg-gray-400"></span> */}
            
            <span className="h-1 w-1 rounded-full bg-gray-400"></span>
            <Link href="/faq" className="text-[#151875] hover:text-[#fb2e86]">
              Faq
            </Link>
            <span className="h-1 w-1 rounded-full bg-gray-400"></span>
            <span className="text-red-600">Shop Grid Default</span>
          </div>
        </div>
      </div>


      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between border-b pb-4">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-[#151875]">Ecommerce Accessories & Fashion Store</h2>
            <p className="text-sm text-gray-600">About 9,620 results (0.62 seconds)</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <label htmlFor="per-page" className="text-sm text-gray-600">Per Page:</label>
              <input
                id="per-page"
                type="number"
                defaultValue={15}
                min={1}
                className="w-16 rounded-sm border border-gray-300 px-2 py-1 text-sm"
                />
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="sort-by" className="text-sm text-gray-600">Sort By:</label>
              <select
                id="sort-by"
                className="rounded-sm border border-gray-300 px-2 py-1 text-sm"
              >
                <option>Best Match</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
            {/* <div className="mt-4 flex items-center space-x-4"> */}
  {/* Grid View Icon */}
  View:
  <button
    className="p-2 rounded-md bg-[#FB2E86] hover:bg-[#1A0B5B] transition-colors"
    aria-label="Grid View"
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      >
      <rect x="3" y="3" width="7" height="7" fill="currentColor" />
      <rect x="14" y="3" width="7" height="7" fill="currentColor" />
      <rect x="3" y="14" width="7" height="7" fill="currentColor" />
      <rect x="14" y="14" width="7" height="7" fill="currentColor" />
    </svg>
  </button>

  {/* List View Icon */}
  <button
    className="p-2 rounded-md bg-[#FB2E86] hover:bg-[#1A0B5B] transition-colors"
    aria-label="List View"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <rect x="3" y="4" width="18" height="3" fill="currentColor" />
      <rect x="3" y="10" width="18" height="3" fill="currentColor" />
      <rect x="3" y="16" width="18" height="3" fill="currentColor" />
    </svg>
  </button>

  {/* Input Field */}
  <div className="flex items-center space-x-2">
    <label htmlFor="" className="text-sm text-gray-600">
    
    </label>
    <input
      id=""
      type="text"
      placeholder=""
      className="rounded-md border border-gray-300 px-3 py-2 text-sm w-20"
    />
  {/* </div> */}
</div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}


    