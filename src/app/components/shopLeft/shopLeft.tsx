import Link from 'next/link'


import { BsChevronDown } from 'react-icons/bs'
import { FaListUl, FaRegHeart, FaSearchPlus, FaStar } from 'react-icons/fa'
import { BsFillGridFill } from 'react-icons/bs'
import { CgShoppingCart } from 'react-icons/cg'
import { HiCheck } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'


const shopLeftData = [
    {
        img: "/sl13.png",
        title: "Dictum morbi",
        originalPrice: "$52.00",
        discountPrice: "$26.00",
        review: "/.png",
        des: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
        img: "/sl14.png",
        title: "Sodales sit",
        originalPrice: "$52.00",
        discountPrice: "$26.00",
        review: "/assets/images/reviews.png",
        des: "Liodufads dfiuhdfd fisduhf uhuhsd duhsfu duhdf uydusha uihdusif diushfuisd ihfsdnfdk  .",
    },
    {
        img: "/sl15.png",
        title: "Nibh varius",
        originalPrice: "$52.00",
        discountPrice: "$26.00",
        review: "/assets/images/reviews.png",
        des: "Lto azig sds  kjidkas dsdhsaid iuerhef skjdskafnds kjfhdskjfh dfjdifh kjfiosdhff jofsdiofj .",
    },
    {
        img: "/sl16.png",
        title: "Mauris quis",
        originalPrice: "$52.00",
        discountPrice: "$26.00",
        review: "/sl1.png",
        des: "ed humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the L.",
    },
    {
        img: "/sl17.png",
        title: "Morbi sagittis",
        originalPrice: "$52.00",
        discountPrice: "$26.00",
        review: "/sl11.png",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    },
    {
        img: "/sl18.png",
        title: "Ultricies venenatis",
        originalPrice: "$52.00",
        discountPrice: "$26.00",
        review: "/sl11.png",
        des: "LLatin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and o.",
    },
    {
        img: "/sl19.png",
        title: "Scelerisque dignissim",
        originalPrice: "$52.00",
        discountPrice: "$26.00",
        review: "/sl11.png",
        des: "ackages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover mano.",
    }, 
]
const ShopLeft = () => {


    const leftIcon = [
        {
            icon: <CgShoppingCart/>
        },
        {
            icon: <FaRegHeart/>
        },
        {
            icon: <FaSearchPlus/>
        }
    ]

    const filterData = [
        {
            icon: <HiCheck/>,
            title: "Coaster Furniture"
        },
        {
            icon: <HiCheck/>,
            title: "Fusion Dot High Fashion"
        },
        {
            icon: <HiCheck/>,
            title: "Unique Furnitture Restor"
        },
        {
            icon: <HiCheck/>,
            title: "Dream Furnitture Flipping"
        },
        {
            icon: <HiCheck/>,
            title: "Young Repurposed"
        },
        {
            icon: <HiCheck/>,
            title: "Green DIY furniture"
        },
    ]

    const discountData = [
        {
            icon: <HiCheck/>,
            title: '20% Cashback',
        },
        {
            icon: <HiCheck/>,
            title: '5% Cashback Offer',
        },
        {
            icon: <HiCheck/>,
            title: '25% Discount Offer',
        },
    ]

    const reviewData = [
        {
            rating: 4, // number of stars
            count: "(2341)",
        },
        {
            rating: 3, // number of stars
            count: "(1726)",
        },
        {
            rating: 2, // number of stars
            count: "(258)",
        },
        {
            rating: 2, // number of stars
            count: "(25)",
        },
    ]
    

    const categoriesData = [
        {
            title: "Prestashop"
        },
        {
            title: "Magento"
        },
        {
            title: "Bigcommerce"
        },
        {
            title: "osCommerce"
        },
        {
            title: "3dcart"
        },
        {
            title: "Bags"
        },
        {
            title: "Jewellery"
        },
        {
            title: "Watches"
        },
    ]

    const priceData = [
        {
            title: "$0.00 - $150.00"
        },
        {
            title: "$150.00 - $350.00"
        },
        {
            title: "$150.00 - $504.00"
        },
        {
            title: "$450.00 +"
        },
    ]

    const colorName = [
        {
            title: "Blue",
            color: "/assets/images/color1.png",
        },
        {
            title: "Orange",
            color: "/assets/images/color2.png",
        },
        {
            title: "Brown",
            color: "/assets/images/color3.png",
        },
        {
            title: "Green",
            color: "/assets/images/color4.png",
        },
        {
            title: "Purple",
            color: "/assets/images/color5.png",
        },
        {
            title: "Sky",
            color: "/assets/images/color6.png",
        },

    ]



  return (
    <>
        <div className='bg-shade2'>
        <div className="bg-[#fbfbff] h-[286px] max-w-[1750px] mx-auto p-9 pl-52 pt-16 ">
        <h2 className="text-left text-[#151875] text-5xl font-bold mb-8">
         Shop Left
        </h2>
        <nav className="flex pl-4 items-center space-x-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 font-semibold">
            Home
          </Link>
          <span className="h-1 w-1 rounded-full bg-gray-400"></span>
          <Link href="/pages" className="hover:text-gray-900 font-semibold">
            Pages
          </Link>
          <span className="h-1 w-1 rounded-full bg-gray-400"></span>
          <span className="text-[#F24E1E] font-semibold">Shop Left</span>
        </nav>
      </div>
            </div>
    <div className='max-w-[1650px] mx-auto ml-8 gap-11'>

            <div className="md:container md:px-[1.3rem] px-[.8rem] md:pt-[98px] pt-12 flex items-center justify-between">
            <div className=''>
                <h2 className='text-[#151875] text-xl lg:text-3xl font-bold'>Ecommerce Acceories & Fashion item</h2>
                <h4 className='text-gray-500'>About 9,620 results (0.62 seconds)</h4>
            </div>
            <div className='hidden lg:block'>
                <div className='flex gap-9 '>
                    <div className='flex gap-2'>
                        <h3 className='text-[#151875] text-base font-normal'>Per Page: </h3>
                        <h3 className='border rounded-sm border-primary py-4 px-8' ></h3>
                    </div>
                    <div className='flex gap-2'>
                        <h3 className='text-[#151875] text-base font-normal'>Sort By: </h3>
                        <h4 className='text-gray-500   border rounded-sm border-primary py-1 px-3 font-lato flex items-center gap-1'>Best Match <span><BsChevronDown/></span></h4>
                    </div>
                    <div className='flex gap-8'>
                    <div className='flex items-center gap-2'>
                        <h3 className='text-[#151875] text-base font-normal'>View:</h3>
                        <FaListUl className='text-[#151875]'/>
                        <BsFillGridFill className='text-[#151875]'/>
                    </div> 
                    <div>
                        <h3 className='border rounded-sm border-primary py-4 px-20' ></h3>
                    </div>
                    </div>

                </div>
            </div>
        </div>


        <div className='md:container md:px-[1.3rem] px-[.8rem] md:flex md:mt-24 mt-6 mb-32'>

                <div className='  w-[350px]'>
                    <div>
                        <h3 className='text-[#151875] underline underline-offset-4 font-weight-[500] pb-4 text-xl font-bold'>Product Brand</h3>

                        <div>
                            {filterData.map((item) => {
                                return <div>
                                    <div className='flex items-center gap-3 py-1'>
                                        <input className='bg-[#2f2fd3] text-indigo-500 border-none' type="checkbox"/>
                                        <h4 className='text-[#4649a3] font-medium'>{item.title}</h4>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>

                    <div className='mt-12'>
                        <h3 className='text-[#151875] underline underline-offset-4 pb-4 text-xl font-bold'>Discount Offer</h3>

                        <div>
                            {discountData.map((item) => {
                                return <div>
                                    <div className='flex items-center gap-3 py-1'>
                                        <input className='bg-light_pink text-pink border-none' type="checkbox"/>
                                        <h4 className='text-[#4649a3] font-medium'>{item.title}</h4>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>

                    <div className='mt-12'>
                        <h3 className='text-[#151875] underline underline-offset-4 pb-4 text-xl font-bold'>Rating Item</h3>

                        <div >
                        {reviewData.map((item, index) => {
        return (
            <div key={index}>
                <div className='flex items-center gap-3 py-1'>
                    <input className='bg-yellow-500 text-yellow border-none' type="checkbox"/>

                    {/* Display stars */}
                    <div className='flex'>
                        {[...Array(5)].map((_, i) => (
                            <FaStar 
                                key={i} 
                                className={`text-${i < item.rating ? 'yellow-500' : 'gray-200'}`} 
                            />
                        ))}
                    </div>

                    <h5 className='text-[#4649a3] font-medium'>{item.count}</h5>
                                    </div>
                                </div>
                            )
                            })}
                        </div>
                        {/* categories */}
                        <div className='mt-12'>
                            <h3 className='text-[#151875] underline underline-offset-4 pb-4 text-xl font-bold'>Categories</h3>
                            <div>
                                {categoriesData.map((item) => {
                                    return <div>
                                        <div className='flex items-center gap-3 py-1'>
                                            <input className='bg-pink-500 text-pink-500 border-none' type="checkbox"/>
                                            <h4 className='text-[#4649a3] font-medium'>{item.title}</h4>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>

                        <div className='mt-12'>
                            <h3 className='text-[#151875] underline underline-offset-4 pb-4 text-xl font-bold'>Price Filter</h3>
                            <div>
                                {priceData.map((item) => {
                                    return <div>
                                        <div className='flex items-center gap-3 py-1'>
                                            <input className='bg-pink-500 text-pink-500 border-none' type="checkbox"/>
                                            <h4 className='text-[#4649a3] font-medium'>{item.title}</h4>
                                        </div>
                                    </div>
                                })}
                            </div>

                            <div className=' relative flex items-center mt-6 '>
                                <div className=''>
                                    <input className="border-2 border-gray-300  bg-white h-10  justify-between rounded-lg text-sm focus:outline-none -ml-2"
                                    type="search" name="search" placeholder="$10.00 - 20000$" />
                                </div>
                                <div className='absolute right-1/3'>
                                    <BiSearch className='text-gray-400' />
                                </div>
                            </div>
                        </div>

                        {/* filter by color */}
                        <div className='mt-12 mb-12'>
                            <h3 className='text-[#151875] underline underline-offset-4 pb-4 text-xl font-bold'>Filter By Color</h3>
                            <div className='grid grid-cols-3 gap-4'>
                                {colorName.map((item) => {
                                    return <div className='flex items-center gap-1'>
                                        <div>
                                            <h4>
                                                <img src={item.color} alt="" />
                                            </h4>
                                        </div>

                                        <div>
                                            <h4>{item.title}</h4>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

                <div className=' md:ml11 lg:ml-32 '>
                    {shopLeftData.map((item) => {
                        return <div className=' mb-8'>
                            <div className=' md:flex gap-6 boxShadow p-6 items-center '>
                                <div>
                                    <img src={item.img} alt="" />
                                </div>

                                <div>
                                    <div className='flex items-center gap-4'>
                                        <h3 className='text-[#151875] text-lg font-bold'>{item.title}</h3>
                                        <div className='my-3 flex justify-center '>
                                            <div className="flex h-3 w-[80px]  gap-2">
                                                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                                                <div className="h-3 w-3 rounded-full bg-pink-500"></div>
                                                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                                            </div>
                                        </div>
                                    </div>

                                   
<div className='flex items-center gap-3'>
  <h4 className='text-[#151875]'>{item.discountPrice}</h4>
  <h4 className='text-pink-500 line-through'>{item.originalPrice}</h4>
  
  <div className='flex gap-1'>
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className="text-yellow-500" />
    ))}
  </div>
</div>
                                    <p className='mt-3 md:w-[70%] text-gray-500'>{item.des}</p>
                                    <div className='flex items-center gap-4 '>
                                        {leftIcon.map((item) => {
                                            return <div className='flext justify-center mt-6 bg-white rounded-full p-4 shadow-2xl '>
                                                <Link href=''  className='text-xl text-[#3438a4]'>
                                                 {item.icon}
                                                </Link>
                                            </div>
                                        })}
                                    </div>

                                </div>

                            </div>
                        </div>
                    })}
                </div>




        </div>

        <div className='container px-[1.3rem] flex justify-center  my-20'>
            <img src="/assets/images/logo1.png" alt="" />
        </div>





    </div>
    </>
  )
}

export default ShopLeft