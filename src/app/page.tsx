import DiscountItem from "./components/Home/DiscountItem";
import FeaturedProducts from "./components/Home/FeaturedProduct";
import HeroCarousel from "./components/Home/HeroCarousel";
import LatestProduct from "./components/Home/LatestProduct";
import PreDiscount from "./components/Home/PreDiscount";
import SecondHero from "./components/Home/SecondHero";
import ShopexOffers from "./components/Home/ShopexOffers";
import TrendingProduct from "./components/Home/TrendingProduct";
import TopCategories from "./components/Home/TopCategories";
import NewsLetter from "./components/Home/NewsLetter";
import Brands from "./components/Home/brands";
import BlogComponent from "./components/Home/BlogComponent";
import ScrollToTop from "./components/Home/ScrollToTop";


export default function Home() {
  return (
   <>
   <HeroCarousel/>
   <FeaturedProducts/>
   <LatestProduct/>
   <ShopexOffers/>
   <SecondHero/>
   <TrendingProduct/>
   <PreDiscount/>
   <DiscountItem/>
   <TopCategories/>
   <NewsLetter/>
   <Brands/>
   <BlogComponent/>
   <ScrollToTop/>   
   </>
  );
}
