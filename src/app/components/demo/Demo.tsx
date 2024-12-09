import React from 'react'
import DemoProduct from './demoProduct/demoProduct'
import ShippingInfo from '@/app/components/demo/shippingInfo/shippingInfo'
import Link from 'next/link'

const Demo = () => {
  return (
    <div className='max-w-[1500px] mx-auto'>

        <div className='bg-[#F6F5FF] py-20 pl-16 max-w-[1800px] capitalize'>
        <h2 className="text-left text-[#151875] text-5xl font-bold mb-8 ml-16">
         hekto demo 
        </h2>
        <nav className="flex pl-4 items-center space-x-2 text-sm text-gray-500 ml-16">
          <Link href="/" className="hover:text-gray-900 font-semibold">
            Home
          </Link>
          <span className="h-1 w-1 rounded-full bg-gray-400"></span>
          <Link href="/pages" className="hover:text-gray-900 font-semibold">
            Pages
          </Link>
          <span className="h-1 w-1 rounded-full bg-gray-400"></span>
          <Link href="/pages/sign-up" className="hover:text-gray-900 font-semibold">
            sign up
          </Link>
          <span className="h-1 w-1 rounded-full bg-gray-400"></span> <Link href="/pages/login" className="hover:text-gray-900 font-semibold">
           sign in 
          </Link>
          <span className="h-1 w-1 rounded-full bg-gray-400"></span> <Link href="/pages/cart" className="hover:text-gray-900 font-semibold">
           cart
          </Link>
          <span className="h-1 w-1 rounded-full bg-gray-400"></span> <Link href="/pages/checkout" className="hover:text-gray-900 font-semibold">
            chekout
          </Link>
          <span className="h-1 w-1 rounded-full bg-gray-400"></span> <Link href="/pages/faq" className="hover:text-gray-900 font-semibold">
           faq
          </Link>
          <span className="h-1 w-1 rounded-full bg-gray-400"></span>
          <span className="text-[#F24E1E] font-semibold">shop grid default</span>
        </nav>
        </div>

        <div className='lg:container lg:px-[1.3rem] px-[.8rem] lg:flex justify-center gap-8 lg:mb-32'>
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