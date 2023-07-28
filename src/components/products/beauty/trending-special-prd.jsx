import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from 'swiper';
import Image from 'next/image';
// internal
import special_thumb from '@assets/img/product/special/big/special-big-1.jpg';
import { ArrowNextSm, ArrowPrevSm, PlusTwo } from '@/svg';
import { useGetProductTypeQuery } from '@/redux/features/productApi';
import ErrorMsg from '@/components/common/error-msg';
import ProductItem from './product-item';
import { HomeThreeTrendingPrdLoader } from '@/components/loader';

// slider setting 
const sliderSetting = {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: 'fade',
  pagination: {
    el: ".tp-special-slider-dot",
    clickable: true,
  },
  navigation: {
    nextEl: ".tp-special-slider-button-next",
    prevEl: ".tp-special-slider-button-prev",
  }
}

const TrendingSpecialPrd = () => {
  const { data: products, isError, isLoading } =
    useGetProductTypeQuery({ type: 'beauty', query: `new=true` });
  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <HomeThreeTrendingPrdLoader loading={isLoading}/>
    );
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data.slice(0, 7);
    content = (
      <Swiper {...sliderSetting} modules={[Pagination,Navigation,EffectFade]} className="tp-special-slider-active swiper-container">
        {product_items.map((item) => (
          <SwiperSlide key={item._id} className="tp-special-item grey-bg-9">
            <ProductItem product={item} prdCenter={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    )
  }
  return (
    <>
      <section className="tp-special-area fix">
        <div className="container">
          <div className="row gx-2">
            <div className="col-xl-5 col-md-6">
              <div className="tp-special-slider-thumb">
                <div className="tp-special-thumb">
                  <Image src={special_thumb} alt="special-big img" priority />
                  <div className="tp-special-hotspot-item tp-special-hotspot-1">
                    <span className="tp-hotspot tp-pulse-border ">
                      <PlusTwo />
                    </span>
                    <div className="tp-special-hotspot-content">
                      <h3 className="tp-special-hotspot-title">Skincare Product</h3>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                  <div className="tp-special-hotspot-item tp-special-hotspot-2">
                    <span className="tp-hotspot tp-pulse-border ">
                      <PlusTwo />
                    </span>
                    <div className="tp-special-hotspot-content">
                      <h3 className="tp-special-hotspot-title">Skincare Product</h3>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-xl-7 col-md-6">
              <div className="tp-special-wrapper grey-bg-9 pt-85 pb-35">
                <div className="tp-section-title-wrapper-3 mb-40 text-center">
                  <span className="tp-section-title-pre-3">Trending This Week’s</span>
                  <h3 className="tp-section-title-3">Special products</h3>
                </div>
                <div className="tp-special-slider ">
                  <div className="row gx-0 justify-content-center">
                    <div className="col-xl-5 col-lg-7 col-md-9 col-sm-7">
                      <div className="tp-special-slider-inner p-relative  ">
                        {content}
                        {/* dot style */}
                        <div className="tp-swiper-dot tp-special-slider-dot d-sm-none text-center"></div>
                        <div className="tp-special-arrow d-none d-sm-block">
                          <button className="tp-special-slider-button-prev">
                            <ArrowPrevSm />
                          </button>

                          <button className="tp-special-slider-button-next">
                            <ArrowNextSm />
                          </button>
                        </div>
                      </div>
                    </div>
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

export default TrendingSpecialPrd;