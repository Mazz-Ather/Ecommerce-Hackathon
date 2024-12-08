import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#eeeef1] ">
      <div className="container mx-auto px-4 mt-8 max-w-[1300px]">
        <div className="grid grid-cols-1 gap-16  md:grid-cols-2 lg:grid-cols-4">
          {/* Brand and Newsletter Section */}
          <div className="space-y-4 mt-6 lg:ml-11">
            <Link href="/" className="text-2xl font-bold">
              Hekto
            </Link>
            <form className="flex max-w-sm  gap-2">
              <Input
                type="email"
                placeholder="Enter Email Address"
                className="rounded-md border-gray-200 lg:-ml-2"
              />
              <Button className="bg-pink-500 hover:bg-pink-600">
                Sign Up
              </Button>
            </form>
            <p className="text-sm text-muted-foreground">
              57 Prince Road London, Greater London NW1 8JB, UK
            </p>
          </div>

          {/* Categories */}
          <div className="lg:ml-24">
            <h3 className="mb-4 text-lg font-semibold mt-6 text-[#1A0B5B]">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Laptops & Computers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Cameras & Photography
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Smart Phones & Tablets
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Video Games & Consoles
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Waterproof Headphones
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="lg:ml-16">
            <h3 className="mb-4 text-lg font-semibold mt-6 text-[#1A0B5B]">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Discount
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Order History
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div className="">
            <h3 className="mb-4 text-lg font-semibold mt-6 text-[#1A0B5B]">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground  hover:text-primary ">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Browse the Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Category
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Pre-Built Pages
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Visual Composer Elements
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  WooCommerce Pages
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-11 bg-[#e0dfe2] flex flex-col items-center justify-evenly gap-20 lg:gap-56 border-t p-7 w-full  md:flex-row">
          <p className="text-sm text-muted-foreground">
            ©2024 - All Rights Reserved
          </p>
          <div className="mt-4 flex space-x-4 md:mt-0">
  {/* Facebook Icon with Purple Background */}
  <Link href="#" className="p-3  rounded-full bg-[#1A0B5B]">
    <Facebook className="h-5 w-5 text-white" />
    <span className="sr-only">Facebook</span>
  </Link>

  {/* Twitter Icon with Purple Background */}
  <Link href="#" className="p-3 rounded-full bg-[#1A0B5B]">
    <Twitter className="h-5 w-5 text-white" />
    <span className="sr-only">Twitter</span>
  </Link>

  {/* Instagram Icon with Purple Background */}
  <Link href="#" className="p-3 rounded-full bg-[#1A0B5B]">
    <Instagram className="h-5 w-5 text-white" />
    <span className="sr-only">Instagram</span>
  </Link>
</div>

        </div>
      </div>
    </footer>
  )
}

