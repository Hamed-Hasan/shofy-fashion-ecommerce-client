import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from '@/layout/headers/header-2';
import FashionBanner from '@/components/banner/fashion-banner';
import FashionCategory from '@/components/categories/fashion-category';
import PopularProducts from '@/components/products/fashion/popular-products';
import ProductArea from '@/components/products/fashion/product-area';
import WeeksFeatured from '@/components/products/fashion/weeks-featured';
import TrendingProducts from '@/components/products/fashion/trending-products';
import BestSellerProducts from '@/components/products/fashion/best-seller-products';
import FashionTestimonial from '@/components/testimonial/fashion-testimonial';
import BlogArea from '@/components/blog/fashion/blog-area';
import FeatureAreaTwo from '@/components/features/feature-area-2';
import InstagramAreaTwo from '@/components/instagram/instagram-area-2';
import Footer from '@/layout/footers/footer';

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle='Home'/>
      <HeaderTwo/>
      <FashionBanner/>
      <FashionCategory/>
      <PopularProducts/>
      <ProductArea/>
      <WeeksFeatured/>
      <TrendingProducts/>
      <BestSellerProducts/>
      <FashionTestimonial/>
      <BlogArea/>
      <FeatureAreaTwo/>
      <InstagramAreaTwo/>
      <Footer style_2={true} />
    </Wrapper>
  )
}
