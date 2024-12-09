'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselSlide {
  id: number;
  mainImage: string;
  lampImage: string;
  miniHeading: string;
  mainHeading: string;
  description: string;
  discount?: string;
}

const carouselData: CarouselSlide[] = [
  {
    id: 1,
    mainImage: '/sofareal.png',
    lampImage: '/lampreal.png',
    miniHeading: 'Best Furniture For Your Castle....',
    mainHeading: 'New Furniture Collection Trends in 2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    // discount: '50% off'
  },
  {
    id: 2,
    mainImage: '/s15r.png',
    lampImage: '/lamp21.png',
    miniHeading: 'Exclusive Furniture Offers',
    mainHeading: 'Modern Design Collection 2024',
    description: 'Discover our unique collection that brings comfort and style to your home.',
    discount: '50% off'
  },
  {
    id: 3,
    mainImage: '/s10r.png',
    lampImage: '/lamp3.png',
    miniHeading: 'Limited Time Deal',
    mainHeading: 'Exclusive Designer Collection',
    description: 'Transform your living space with our premium furniture selection.',
    discount: '20% off'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#f2f0ff] h-auto relative max-w-[1550px] mx-auto overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full px-4 lg:px-8">
          {/* Left Section */}
          <div className="w-full lg:w-[60%] relative z-10 space-y-3 space-x-16 text-center lg:text-left">
            {/* Lamp Image */}
            <div className="absolute -top-11 md:-top-20 lg:-top-[150px] -left-28 w-36 h-36 hidden lg:block lg:ml-11">
              <Image
                src={carouselData[currentSlide].lampImage}
                alt="Lamp decoration"
                width={250}
                height={250}
                className="object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-3 lg:-mr-11">

            <p className="text-[#fb2e86] text-base lg:text-lg lg:ml-10 font-bold">
              {carouselData[currentSlide].miniHeading}
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold text-[#1A0B5B] leading-tight ml-8">
              {carouselData[currentSlide].mainHeading}
            </h1>
            <p className="text-[#8A8FB9] max-w-md ml-8">
              {carouselData[currentSlide].description}
            </p>
            <button className="bg-[#FB2E86] text-white px-8 py-3 rounded-md hover:bg-[#e91e63] transition-colors ml-8">
              Shop Now
            </button>
          </div>
            </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 relative h-full flex items-center justify-center">
          <div className="relative w-full h-[400px] lg:h-[600px]">
  {/* Image Container with Custom Shadow */}
  <div className="absolute inset-0 custom-shadow z-10 lg:h-[500px] lg:mt-10 ml-20 rounded-lg">
    <Image
      src={carouselData[currentSlide].mainImage}
      alt="Furniture"
      fill
      className="object-contain rounded-lg"
    />
  </div>

  {/* Image */}
  {/* <div className="relative w-full h-[400px] lg:h-[500px]"> */}
    {/* <Image */}
      {/* // src={carouselData[currentSlide].mainImage} */}
      {/* // alt="Furniture" */}
      {/* fill */}
      {/* className="object-contain rounded-lg" */}
    {/* /> */}
  {/* </div> */}

              
              {/* Discount Tag */}
              {/* {carouselData[currentSlide].discount && (
              <div
              className="absolute top-20 right-10 p-6 text-center text-white font-bold jelly-container "
            >
              {carouselData[currentSlide].discount.split(' ').map((text, i) => (
                <span key={i} className="block">{text}</span>
              ))}
            </div>
            
              )} */}
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-[999]">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 transform rotate-45 transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-[#fb2e86]'
                  : 'border-2 border-[#fb2e86]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
