import React from 'react'
import DemoProduct from './demoProduct/demoProduct'
import ShippingInfo from '@/app/components/demo/shippingInfo/shippingInfo'
import Link from 'next/link'

const Demo = () => {
  return (
    <div className='max-w-[1500px] mx-auto'>
<div className='bg-[#F6F5FF] py-20 px-4 max-w-[1800px] capitalize lg:pl-32 '>
  <h2 className="text-left text-[#151875] text-4xl md:text-5xl font-bold mb-4">
    hekto demo
  </h2>
  <nav className="flex flex-wrap items-center space-x-2 text-sm text-gray-500">
    <Link href="/" className="hover:text-gray-900 font-semibold">
      Home
    </Link>
    <span className="h-1 w-1 rounded-full bg-gray-400"></span>
    <Link href="/pages" className="hover:text-gray-900 font-semibold">
      Pages
    </Link>
    <span className="h-1 w-1 rounded-full bg-gray-400"></span>
    <Link href="/pages/sign-up" className="hover:text-gray-900 font-semibold">
      Sign Up
    </Link>
    <span className="h-1 w-1 rounded-full bg-gray-400"></span>
    <Link href="/pages/login" className="hover:text-gray-900 font-semibold">
      Sign In
    </Link>
    <span className="h-1 w-1 rounded-full bg-gray-400"></span>
    <Link href="/pages/cart" className="hover:text-gray-900 font-semibold">
      Cart
    </Link>
    <span className="h-1 w-1 rounded-full bg-gray-400"></span>
    <Link href="/pages/checkout" className="hover:text-gray-900 font-semibold">
      Checkout
    </Link>
    <span className="h-1 w-1 rounded-full bg-gray-400"></span>
    <Link href="/pages/faq" className="hover:text-gray-900 font-semibold">
      FAQ
    </Link>
    <span className="h-1 w-1 rounded-full bg-gray-400"></span>
    <span className="text-[#F24E1E] font-semibold">Shop Grid Default</span>
  </nav>
</div>

        <div className='xl:container lg:px-[1.3rem] px-[.8rem] lg:flex justify-center gap-8 lg:mb-32'>
            <div className=' lg:w-[770px]'>
                <ShippingInfo/>
            </div>

            <div className='lg:ml-10 lg:w-[400px] '>
                <DemoProduct/>
            </div>
        </div>

    </div>
  )
}

export default Demo