import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// internal
import offer_img from '@assets/img/banner/banner-slider-offer.png';
import banner_img_1 from '@assets/img/banner/banner-slider-1.png';
import banner_img_2 from '@assets/img/banner/banner-slider-2.png';
import banner_img_3 from '@assets/img/banner/banner-slider-3.png';

// banner products
const bannerProducts = [
  {
    id: 1,
    banner_bg_txt: 'tablet',
    subtitle: 'Tablet Collection 2023',
    title: 'Galaxy Tab S6 Lite Android Tablet',
    oldPrice: 320,
    newPrice: 288,
    img: banner_img_1,
  },
  {
    id: 2,
    banner_bg_txt: 'tablet',
    subtitle: 'Tablet Collection 2023',
    title: 'Galaxy Tab S6 Lite Android Tablet',
    oldPrice: 320,
    newPrice: 288,
    img: banner_img_2,
  },
  {
    id: 3,
    banner_bg_txt: 'tablet',
    subtitle: 'Tablet Collection 2023',
    title: 'Galaxy Tab S6 Lite Android Tablet',
    oldPrice: 320,
    newPrice: 288,
    img: banner_img_3,
  },
]

// slider setting 
const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: 'fade',
  pagination: {
    el: ".tp-product-banner-slider-dot",
    clickable: true,
  }
}

const ProductBanner = () => {
  return (
    <>
      <div className="tp-product-banner-area pb-90">
        <div className="container">
          <div className="tp-product-banner-slider fix">
            <Swiper {...slider_setting} modules={[Pagination, EffectFade]} className="tp-product-banner-slider-active swiper-container">
              {bannerProducts.map((item, i) => (
                <SwiperSlide key={item.id} className="tp-product-banner-inner theme-bg p-relative z-index-1 fix">
                  <h4 className="tp-product-banner-bg-text">{item.banner_bg_txt}</h4>
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                      <div className="tp-product-banner-content p-relative z-index-1">
                        <span className="tp-product-banner-subtitle">{item.subtitle}</span>
                        <h3 className="tp-product-banner-title">{item.title}</h3>
                        <div className="tp-product-banner-price mb-40">
                          <span className="old-price">${item.oldPrice.toFixed(2)}</span>
                          <p className="new-price">${item.newPrice.toFixed(2)}</p>
                        </div>
                        <div className="tp-product-banner-btn">
                          <Link href="/shop" className="tp-btn tp-btn-2">Shop now</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="tp-product-banner-thumb-wrapper p-relative">
                        <div className="tp-product-banner-thumb-shape">
                          <span className="tp-product-banner-thumb-gradient"></span>
                          <Image className="tp-offer-shape" src={offer_img} alt="tp-offer-shape" />
                        </div>

                        <div className="tp-product-banner-thumb text-end p-relative z-index-1">
                          <Image src={item.img} alt="banner-slider img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="tp-product-banner-slider-dot tp-swiper-dot"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBanner;