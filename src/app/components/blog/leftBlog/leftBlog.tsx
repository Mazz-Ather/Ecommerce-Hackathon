import Link from "next/link"
import { FaRegCalendarAlt } from "react-icons/fa"

import { FaPencilAlt } from "react-icons/fa"
import RightBlog from "../rightBlog/rightBlog"

const blogPostData = [
    {
        id: 1,
        img: "/bp1.png",
        title: "Mauris at orci non vulputate diam tincidunt nec.",
        href: "/singlepost",
            des: "this is a test blog post for testing lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        footer: "Read More "
    },
    {
        id: 2,
        img: "/bp2.png",
        title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
        des: "this is a test blog post for testing lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        footer: "Read More "
    },
    {
        id: 3,
        img: "/bp3.png",
         title: "Sit nam congue feugiat nisl, mauris amet nisi. ",
        des: "this is a test blog post for testing lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        footer: "Read More "
    },

]

const BlogPage = () => {
  return (
    <>
 
      <div className="bg-[#f5f5f8] h-[286px] max-w-[1750px] mx-auto p-9 pl-52 pt-16 mb-7">
        <h2 className="text-left text-[#151875] text-5xl font-bold mb-8">
        Blog Page
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
          <span className="text-[#F24E1E] font-semibold">Blog Page</span>
        </nav>
      </div>  

      <div className="lg:flex ">
    <div className='max-w-[1200px] mx-auto w-[60%]'>
      <div>
        {blogPostData.map((item , index) => {
            return <div key={index}>
                <div>
                    <div>
                        <img src={item.img} alt="" />
                    </div>
    <div className="flex gap-6 mt-7">
      {/* Red Pencil Icon with Text */}
      <div className="flex items-center gap-2">
        {/* Pencil Icon */}
        <div className="w-6 h-6 flex items-center justify-center bg-none text-red-500">
          <FaPencilAlt size={24} />
        </div>
        {/* Text */}
        <h6 className="bg-red-200 px-6 rounded-sm text-black font-medium">
          Surf Auxion
        </h6>
      </div>

      {/* Yellow Calendar Icon with Text */}
      <div className="flex items-center gap-2">
        {/* Calendar Icon */}
        <div className="w-6 h-6 flex items-center justify-center bg-none text-yellow-500">
          <FaRegCalendarAlt size={24} />
        </div>
        {/* Text */}
        <h6 className="bg-yellow-200 px-6 rounded-sm text-black font-medium">
          Aug 09 2020
        </h6>
      </div>
    </div>



                    <div className='mt-11'>
                        <a className='font-semibold text-[#151875] font-josefin text-[30px] ' href={item.href}>{item.title}</a>
                        <p className='text-gray-500 lg:w-[78%] mt-5 '>{item.des}</p>
                        <div className="flex items-center gap-2">
                        <h6 className='font-semibold text-[#151875] mt-7 mb-6'>
                        <Link href={`/singleblog/${item.id}`}>      {item.footer}
                          </Link>
                           </h6>
                        <span className="h-2 w-2 rounded-full bg-[#920f0f]"></span>
                        </div>
                    </div>
                </div>
            </div>
        })}
      </div>

      <div className='flex items-center justify-center py-5 lg:ml-72'>
        <h4 className='bg-pink-600 px-3 rounded-sm text-black font-lato'>1</h4>
        <h4 className='border-2 px-3  rounded-sm text-black font-lato mx-10'>2</h4>
        <h4 className='border-2 px-3  rounded-sm text-black font-lato '>3</h4>
        <h4 className='border-2 px-3  rounded-sm text-black font-lato mx-10'>4</h4>
      </div>
    </div>
    <div>

      <RightBlog />
    </div>
      </div>
    </>
  )
}

export default BlogPage