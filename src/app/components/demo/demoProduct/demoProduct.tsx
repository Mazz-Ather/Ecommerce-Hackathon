// main page demo product 

const demoProductData = [
    {
        pic: "/mp1.png",
        title: "Ut Diam consequat",
        color: "Brown",
        size: "XL",
        price: "$32.00"
    },
    {
        pic: "/mp2.png",
        title: "Ut Diam consequat",
        color: "Brown",
        size: "XL",
        price: "$32.00"
    },
    {
        pic: "/mp3.png",
        title: "Ut Diam consequat",
        color: "Brown",
        size: "XL",
        price: "$22.00"
    },
    {
        pic: "/mp4.png",
        title: "Ut Diam consequat",
        color: "Brown",
        size: "XL",
        price: "$11.00"
    },
    {
        pic: "/mp6.png",
        title: "Ut Diam consequat",
        color: "Brown",
        size: "XL",
        price: "$99.00"
    },
]

const DemoProduct = () => {
  return (
    <div className='md:mt-44 mt-12'>
      <div >
        {demoProductData.map((item , index) => {
            return <div key={index}>
                        <div className='flex gap-4 mb-4 items-center'>
                        <div>
                            <img src={item.pic} alt="" />
                        </div>
                        <div className='flex items-center justify-between '>
                            <div>
                                <h4 className='text-[14px] font-semibold'>{item.title}</h4>
                                <h5 className='text-indigo-300'>color:{item.color}</h5>
                                <h5 className='text-indigo-300'>Size:{item.size}</h5>
                            </div>
                            <div className='w-[160px] text-right'>
                                <h4>{item.price}</h4>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className=' border-[1px] mb-4'></div>
            </div>
            
        })}
      </div>

            <div className="bg-gray-100 py-9 px-6 mt-6 mb-12">
                <div className=''>
                    <div className='text-[#151875] text-semibold text-xl flex items-center justify-between'>
                        <h3 className=''>Subtotals:</h3>
                        <h4>£219.00</h4>
                    </div>
                    <div className='md:w-[350px] border-[1px] mt-2'></div>
                </div>

                <div className='mt-9'>
                    <div className='text-[#151875] text-semibold text-xl flex items-center justify-between'>
                        <h3>Totals:</h3>
                        <h4>£325.00</h4>
                    </div>
                    <div className='md:w-[350px] border-[1px] mt-2'></div>
                </div>

                <div className='flex items-center mt-7 gap-1 text-indigo-300'>
                    <input className='bg-green-500 text-[#63d048] w-[8px] h-[8px]' type="checkbox" name="" id="" />
                    <h6 className='text-[12px] text-gray-400'>Shipping & taxes calculated at checkout</h6>
                </div>

                <button className='w-full mt-11 bg-green-500 hover:bg-green-600 text-white px-4 py-2'>Proceed To Checkout</button>

            </div>
    </div>
  )
}

export default DemoProduct