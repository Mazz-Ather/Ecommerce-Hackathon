'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiSearch, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const Navbar = ({ cartItems }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);
  const pathname = usePathname();
  

  useEffect(() => {
    // Close the home dropdown when the route changes
    const handleRouteChange = () => {
      setShowHomeDropdown(false);
    };
  // Remove the router events since they're not needed in app directory
  handleRouteChange();
}, [pathname]); // Change dependency to pathname

  const toggleHomeDropdown = () => {
    setShowHomeDropdown(!showHomeDropdown);
  };

  const closeHomeDropdown = () => {
    setShowHomeDropdown(false);
  };

  return (
    <nav className="bg-white shadow-md rounded-t-sm max-w-[1550px] mx-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center lg:ml-36">
            <Link href="/" className="font-bold text-xl tracking-tight text-gray-900 m-4">
             <img src="/hekto.png" alt="logo" />
            </Link>
          </div>

          {/* Center Section */}
          <div className="hidden lg:flex items-center justify-start">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Home */}
              <div className="relative">
                <button
                  className={`text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 ${
                    pathname === '/' ? 'text-[#fb2e86]' : ''
                  }`}
                  onClick={toggleHomeDropdown}
                >
                  Home
                  <FiChevronDown className={`transition-transform ${showHomeDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showHomeDropdown && (
                  <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                    <Link
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeHomeDropdown}
                    >
                  Home Page
                    </Link>
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeHomeDropdown}
                    >
                     About us
                    </Link>
                  </div>
                )}
              </div>

              {/* Pages */}
              <Link
                href="/pages"
                className={`text-gray-500 hover:text-[#fb2e86] px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/pages' ? 'text-[#fb2e86]' : ''
                }`}
              >
                Pages
              </Link>

              {/* Products */}
              <Link
                href="/products"
                className={`text-gray-500 hover:text-[#fb2e86] px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/products' ? 'text-[#fb2e86]' : ''
                }`}
              >
                Products
              </Link>

              {/* about */}
              <Link
                href="/blog"
                className={`text-gray-500 hover:text-[#fb2e86] px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/blog' ? 'text-[#fb2e86]' : ''
                }`}
              >
               Blog
              </Link>

              {/* Shop */}
              <Link
                href="/shop"
                className={`text-gray-500 hover:text-[#fb2e86] px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/shop' ? 'text-[#fb2e86]' : ''
                }`}
              >
                Shop
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={`text-gray-500 hover:text-[#fb2e86] px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/contact' ? 'text-[#fb2e86]' : ''
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center">
            <div className="relative mr-36">
              <input
                type="text"
                className="px-3 py-1 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder=""
              />
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none bg-[#fb2e86] text-white p-3">
                <FiSearch className="" />
              </div>
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <FiMenu className="block h-6 w-6" />
              ) : (
                <FiX className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="relative">
              <button
                className={`text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-lg font-medium flex items-center gap-1 ${
                  pathname === '/' ? 'text-[#fb2e86]' : ''
                }`}
                onClick={toggleHomeDropdown}
              >
                Home
                <FiChevronDown className={`transition-transform ${showHomeDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showHomeDropdown && (
                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                  <Link
                    href="/home1"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeHomeDropdown}
                  >
                    Home 1
                  </Link>
                  <Link
                    href="/home2"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeHomeDropdown}
                  >
                    Home 2
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/pages"
              className={`text-gray-500 hover:text-[#fb2e86] block px-3 py-2 rounded-md text-lg font-medium ${
                pathname === '/pages' ? 'text-[#fb2e86]' : ''
              }`}
            >
              Pages
            </Link>
            <Link
              href="/products"
              className={`text-gray-500 hover:text-[#fb2e86] block px-3 py-2 rounded-md text-lg font-medium ${
                pathname === '/products' ? 'text-[#fb2e86]' : ''
              }`}
            >
              Products
            </Link>
            <Link
              href="/blog"
              className={`text-gray-500 hover:text-[#fb2e86] block px-3 py-2 rounded-md text-lg font-medium ${
                pathname === '/blog' ? 'text-[#fb2e86]' : ''
              }`}
            >
              Blog
            </Link>
            <Link
              href="/shop"
              className={`text-gray-500 hover:text-[#fb2e86] block px-3 py-2 rounded-md text-lg font-medium ${
                pathname === '/shop' ? 'text-[#fb2e86]' : ''
              }`}
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className={`text-gray-500 hover:text-[#fb2e86] block px-3 py-2 rounded-md text-lg font-medium ${
                pathname === '/contact' ? 'text-[#fb2e86]' : ''
              }`}
            >
              Contact
            </Link>
          </div>
          <div className="px-2 pt-2 pb-3">
            <div className="relative">
              <input
                type="text"
                className="px-4 py-2 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                placeholder=""
              />
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none bg-[#fb2e86] text-white p-3">
                <FiSearch className="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
