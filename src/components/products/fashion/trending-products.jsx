import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
// internal
import { ArrowRightLong, TextShapeLine } from '@/svg';
import { useGetProductTypeQuery } from '@/redux/features/productApi';
import ProductItem from './product-item';
import ErrorMsg from '@/components/common/error-msg';
import trending_banner from '@assets/img/product/trending/banner/trending-banner.jpg';
import { HomeTwoNewPrdPrdLoader } from '@/components/loader';
import Link from 'next/link';

// slider setting 
const slider_setting = {
  slidesPerView: 2,
  spaceBetween: 24,
  pagination: {
    el: ".tp-trending-slider-dot",
    clickable: true,
  },
  breakpoints: {
    '1200': {
      slidesPerView: 2,
    },
    '768': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 2,
    },
    '0': {
      slidesPerView: 1,
    },
  }
}

const TrendingProducts = () => {
  const { data: products, isError, isLoading } =
    useGetProductTypeQuery({ type: 'fashion', query: `new=true` });
  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <HomeTwoNewPrdPrdLoader loading={isLoading}/>
    );
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data.slice(0,5);
    content = (
      <Swiper {...slider_setting} modules={[Pagination]} className="tp-trending-slider-active swiper-container">
        {product_items.map((item) => {
          return (
            <SwiperSlide key={item._id} className="tp-trending-item">
              <ProductItem product={item} style_2={true} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    )
  }
  return (
    <>
      <section className="tp-trending-area pt-140 pb-150">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-trending-wrapper">
                <div className="tp-section-title-wrapper-2 mb-50">
                  <span className="tp-section-title-pre-2">
                    More to Discover
                    <TextShapeLine />
                  </span>
                  <h3 className="tp-section-title-2">Trending Arrivals</h3>
                </div>
                <div className="tp-trending-slider">
                  {content}
                  <div className="tp-trending-slider-dot tp-swiper-dot text-center mt-45"></div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-8 col-sm-10">
              <div className="tp-trending-banner p-relative ml-35">
                <div className="tp-trending-banner-thumb w-img include-bg" style={{backgroundImage:`url(${trending_banner.src})`}}></div>
                <div className="tp-trending-banner-content">
                  <h3 className="tp-trending-banner-title">
                    <Link href="/shop">Short Sleeve Tunic <br /> Tops Casual Swing</Link>
                  </h3>
                  <div className="tp-trending-banner-btn">
                    <Link href="/shop" className="tp-btn tp-btn-border tp-btn-border-white tp-btn-border-white-sm">
                      Explore More
                      <ArrowRightLong />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingProducts;