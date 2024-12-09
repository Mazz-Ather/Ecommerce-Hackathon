import Link from 'next/link'
import React from 'react'

const ShippingInfo = () => {
  return (
    <div>
        
        <div className='md:mt-20 mt-8 max-w-[1400px] mx-auto ml-16'>
            <h3 className='text-[#151875] text-2xl font-semibold ml-4 mb-3 mt-4'>Hekto Demo</h3>
            <nav className="flex pl-4 items-center space-x-1 text-base text-gray-500">
          <Link href="/cart" className="hover:text-gray-900  text-[#151875] font-semibold">
           Cart
          </Link>
          <span>/</span>
          <Link href="/information" className="hover:text-gray-900  text-[#151875] font-semibold">
          information
          </Link>
          <span>/</span>
          <Link href="/shippingInfo" className="hover:text-gray-900  text-[#151875] font-semibold">
         shipping
          </Link>
          <span>/</span>
          <Link href="/payment" className="hover:text-gray-900  text-[#151875] font-semibold">
         payment
          </Link>

          </nav>
        </div>
      <div className='mt-11 md:p-8 p-2 pb-16 bg-[#F6F5FF] py-11'>

        <div className='md:flex justify-between'>
            <h3 className='text-[#151875] md:mt-9 text-xl font-semibold'>Contact Information</h3>
            <div className='flex'>
                <h6 className='text-[14px] text-gray-400 md:mt-9 pr-2'>Already have an account?</h6>
                <h6 className='text-[14px] text-gray-400 md:mt-9 pr-2'>Log in</h6>
            </div>
        </div>
        
        <h6 className='text-[14px] text-gray-400 mb-2 mt-6 md:mt-9'>Email or mobile phone number</h6>
        <div className='border-[1px] '></div>

        <div className='flex items-center gap-2 mt-4 md:mt-8'>
            <input className='bg-green-500 w-[8px] h-[8px] text-gray-400 border-none' type="checkbox" name="" id="" />
            <h6 className='text-gray-400 text-[12px]'>Keep me up to date on news and excluive offers</h6>
        </div>

        <div className='md:mt-28 mt-12'>
            <h3 className='text-[#151875] text-xl font-semibold md:mb-12 mb-6'>Shipping address</h3>

            <div>
                <div className="md:flex justify-between">
                    <div>
                        <h6 className='text-gray-400 mb-2'>First name (optional)</h6>
                        <div className='border-[1px] md:w-[336px] '></div>
                    </div>
                    <div className='mt-6 md:mt-0'>
                        <h6 className='w-[336px] text-gray-400 mb-2'>Last name</h6>
                        <div className='border-[1px] '></div>
                    </div>
                    
                </div>

                    <div className='md:py-10 py-6'>
                        <h6 className='w-[336px] text-gray-400 mb-2'>Address</h6>
                        <div className='border-[1px] '></div>
                    </div>
                    <div>
                        <h6 className='w-[336px] text-gray-400 mb-2'>Appaetnentment,suit,e.t.c (optinal)</h6>
                        <div className='border-[1px] '></div>
                    </div>
                    <div className='md:mt-10 mt-6'>
                        <h6 className='w-[336px] text-gray-400 mb-2'>City</h6>
                        <div className='border-[1px] '></div>
                    </div>

                    <div className='md:flex justify-between'>
                        <div className='md:mt-10 mt-6'>
                            <h6 className='w-[336px] text-gray-400 mb-2'>Bangladesh</h6>
                            <div className='border-[1px] '></div>
                        </div>

                        <div className='md:mt-10 mt-6'>
                            <h6 className='w-[336px] text-gray-400 mb-2'>Postal Code</h6>
                            <div className='border-[1px] '></div>
                        </div>
                    </div>

                    <button className='md:mt-28 mt-12  text-white bg-pink-600 px-4 py-2'>Continue Shipping</button>
                    
            </div>
        </div>

      </div>
    </div>
  )
}

export default ShippingInfo