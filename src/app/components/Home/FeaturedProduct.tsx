'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5';
import { AiOutlineZoomIn } from 'react-icons/ai';

type Product = {
  id: number;
  title: string;
  code: string;
  price: number;
  colors: string[];
  images: { [key: string]: string };
  slug: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "Cantilever Chair",
    code: "Y523201",
    price: 42.0,
    colors: ["red", "green", "blue"],
    images: {
      "red": "/s25.jpeg",
      "green": "/s2.jpeg",
      "blue": "/s3.jpeg",
    },
    slug: "1",
  },
  {
    id: 2,
    title: "Wood Chair",
    code: "Y523201",
    price: 42.0,
    colors: ["yellow", "black", "orange"],
    images: {
      "yellow": "/s11.jpeg",
      "black": "/s2.jpeg",
      "orange": "/s3.jpeg",
    },
    slug: "2",
  },
  {
    id: 3,
    title: "Sofa Collection",
    code: "Y523201",
    price: 42.0,
    colors: ["#FB2E86", "#2F1AC4", "#FF3EB2"],
    images: {
      "#FB2E86": "/s17.jpeg",
      "#2F1AC4": "/s2.jpeg",
      "#FF3EB2": "/s5.jpeg",
    },
    slug: "3",
  },
  {
    id: 4,
    title: "Cantilever Chair",
    code: "Y523201",
    price: 42.0,
    colors: ["#FB2E86", "#2F1AC4", "#FF3EB2"],
    images: {
      "#FB2E86": "/s19.jpeg",
      "#2F1AC4": "/s2.jpeg",
      "#FF3EB2": "/s3.jpeg",
    },
    slug: "4",
  },
  {
    id: 5,
    title: "Arm Chair",
    code: "Y523201",
    price: 42.0,
    colors: ["#FB2E86", "#2F1AC4", "#FF3EB2"],
    images: {
      "#FB2E86": "/s1.jpeg",
      "#2F1AC4": "/chair2.jpeg",
      "#FF3EB2": "/s3.jpeg",
    },
    slug: "5",
  },
  {
    id: 6,
    title: "Arm Chair",
    code: "Y523201",
    price: 42.0,
    colors: ["#FB2E86", "#2F1AC4", "#FF3EB2"],
    images: {
      "#FB2E86": "/s25.jpeg",
      "#2F1AC4": "/s21.jpeg",
      "#FF3EB2": "/s22.jpeg",
    },
    slug: "6",
  },
  {
    id: 7,
    title: "Cantilever Chair",
    code: "Y523201",
    price: 42.0,
    colors: ["#FB2E86", "#2F1AC4", "#FF3EB2"],
    images: {
      "#FB2E86": "/s2.jpeg",
      "#2F1AC4": "/chair2.jpeg",
      "#FF3EB2": "/chair3.jpeg",
    },
    slug: "7",
  },
  {
    id: 8,
    title: "Cantilever Chair",
    code: "Y523201",
    price: 42.0,
    colors: ["#FB2E86", "#2F1AC4", "#FF3EB2"],
    images: {
      "#FB2E86": "/chair1.jpeg",
      "#2F1AC4": "/chair2.jpeg",
      "#FF3EB2": "/chair3.jpeg",
    },
    slug: "8",
  },
];

const FeaturedProduct = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedColors, setSelectedColors] = useState<{ [key: number]: string }>(
    products.reduce((acc, product) => ({ ...acc, [product.id]: product.colors[0] }), {})
  );

  const handleColorSelect = (productId: number, color: string) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: color }));
  };

  // Scroll event listener to synchronize navigation with scroll
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const scrollWidth = scrollContainerRef.current.scrollWidth;
        const containerWidth = scrollContainerRef.current.clientWidth;
        const maxScroll = scrollWidth - containerWidth;

        // Determine the active slide
        const newActiveSlide = Math.round((scrollLeft / maxScroll) * 3); // Assuming 4 slides
        setActiveSlide(newActiveSlide);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-16 px-4 max-w-[1600px] mx-auto">
    <h2 className="text-5xl font-bold text-center mb-12 text-[#1A0B5B]">Featured Products</h2>
  
    {/* Products Container */}
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto hide-scrollbar gap-6 snap-x snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[250px] sm:min-w-[300px] snap-start group relative">
            {/* Product Image Section */}
            <div className="relative bg-[#F6F7FB] h-[300px] rounded-t-lg">
              <Image
                src={product.images[selectedColors[product.id]]}
                alt={product.title}
                fill
                className="object-contain p-4"
              />
              <div className="absolute left-4 top-4 flex flex-row gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-white rounded-full hover:bg-[#fb2e86] hover:text-white transition-colors text-violet-500">
                  <IoCartOutline size={20} className="text-[#fb2e86] hover:text-white" />
                </button>
                <button className="p-2 bg-white rounded-full hover:bg-[#2F1AC4] hover:text-white transition-colors">
                  <IoHeartOutline size={20} className="text-[#2F1AC4] hover:text-white" />
                </button>
                <button className="p-2 bg-white rounded-full hover:bg-[#2F1AC4] hover:text-white transition-colors">
                  <AiOutlineZoomIn size={20} className="text-[#2F1AC4] hover:text-white" />
                </button>
              </div>
              <button
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#08D15F] text-white px-6 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => window.location.href = `/featuredProduct/${product.slug}`} // Navigate to dynamic page
              >
                View Details
              </button>
            </div>
            {/* Product Info Section */}
            <div className="bg-white p-4 rounded-b-lg group-hover:bg-[#2f1ac4] transition-colors text-center">
              <h3 className="text-[#FB2E86] group-hover:text-white text-lg font-medium mb-2">
                {product.title}
              </h3>
              <div className="flex gap-2 mb-2 justify-center">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorSelect(product.id, color)}
                    className={`px-4 py-1 ${
                      selectedColors[product.id] === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <p className="text-gray-600 group-hover:text-gray-200 mb-1">Code: {product.code}</p>
              <p className="text-gray-800 group-hover:text-white font-medium">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
  
      {/* Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {[0, 1, 2, 3].map((dot) => (
          <button
            key={dot}
            onClick={() => {
              if (scrollContainerRef.current) {
                const scrollWidth = scrollContainerRef.current.scrollWidth;
                const containerWidth = scrollContainerRef.current.clientWidth;
                const maxScroll = scrollWidth - containerWidth;
                const scrollPosition = (maxScroll * dot) / 3;
                scrollContainerRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
              }
              setActiveSlide(dot);
            }}
            className={`h-2 transition-all duration-300 rounded-lg ${
              activeSlide === dot ? 'w-20 bg-[#FB2E86]' : 'w-10 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  </div>
  );
};

export default FeaturedProduct;
