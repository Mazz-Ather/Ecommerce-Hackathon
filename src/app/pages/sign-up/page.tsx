import Link from "next/link";
import React from "react";

const SignUpPage: React.FC = () => {
  return (
    <>
    <div className="bg-[#fbfbff] h-[286px] max-w-[1750px] mx-auto p-9 sm:pl-12 lg:pl-52 pt-16">
  <h2 className="text-left text-[#151875] text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
    Create an Account
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
    <span className="text-[#F24E1E] font-semibold">Create an Account</span>
  </nav>
</div>

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md shadow-black">
        {/* Main Heading */}
        <h1 className="text-2xl font-extrabold font-weight-bold text-center text-black ">SIGN UP</h1>
        
        {/* Mini Paragraph */}
        <p className="mt-2 text-sm text-center text-gray-500">
          Create an account to continue.
        </p>

        {/* Inputs */}
        <form className="mt-6 space-y-4">
        <input
            type="name"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
          />  <input
          type="phone"
            placeholder="Phone number"
          className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
        />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300  focus:ring-2 focus:ring-pink-500 focus:outline-none"
          />

          {/* Forgot Password */}
          <p className="text-sm text-left text-gray-500 cursor-pointer hover:text-gray-700">
            Forgot Password?
          </p>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 text-white bg-pink-600 rounded-md hover:bg-pink-700 focus:outline-none"
          >
            Log In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/pages/login" className="hover:text-pink-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
    <div className="flex justify-center items-center max-w-[1540px] mx-auto py-11">
            <img src="/brand1.png" alt="brand1" />
        </div>
    </>
  );
};

export default SignUpPage;