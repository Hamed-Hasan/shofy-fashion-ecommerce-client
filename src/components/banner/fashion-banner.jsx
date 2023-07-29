import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Navigation } from 'swiper';
// internal
import slider_img_1 from '@assets/img/slider/2/slider-1.png';
import slider_img_2 from '@assets/img/slider/2/slider-2.png';
import slider_img_3 from '@assets/img/slider/2/slider-3.png';
import slider_shape from '@assets/img/slider/2/shape/shape-1.png';
import thumb_shape_1 from '@assets/img/slider/2/shape/shape-2.png';
import thumb_shape_2 from '@assets/img/slider/2/shape/shape-3.png';

// slider data 
const slider_data = [
  {
    id: 1,
    subtitle: 'New Arrivals 2023',
    title: 'The Clothing Collection',
    img: slider_img_1,
  },
  {
    id: 2,
    subtitle: 'Best Selling 2023',
    title: 'The Summer Collection',
    img: slider_img_2,
  },
  {
    id: 3,
    subtitle: 'Winter Has Arrived',
    title: 'Amazing New designs',
    img: slider_img_3,
  },
]

// slider setting 
const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 30,
  effect: 'fade',
  navigation: {
    nextEl: ".tp-slider-2-button-next",
    prevEl: ".tp-slider-2-button-prev",
  },
  pagination: {
    el: ".tp-slider-2-dot",
    clickable: true,
  },
}

const FashionBanner = () => {
  return (
    <>
      <section className="tp-slider-area p-relative z-index-1">
        <Swiper {...slider_setting} modules={[Pagination, Navigation, EffectFade]} className="tp-slider-active-2 swiper-container">
          {slider_data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="tp-slider-item-2 tp-slider-height-2 p-relative grey-bg-5 d-flex align-items-end">
                <div className="tp-slider-2-shape">
                  <Image className="tp-slider-2-shape-1" src={slider_shape} alt="slider_shape" />
                </div>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-slider-content-2">
                        <span>{item.subtitle}</span>
                        <h3 className="tp-slider-title-2">{item.title}</h3>
                        <div className="tp-slider-btn-2">
                          <Link href="/shop" className="tp-btn tp-btn-border">Shop Collection</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-slider-thumb-2-wrapper p-relative">
                        <div className="tp-slider-thumb-2-shape">
                          <Image className="tp-slider-thumb-2-shape-1" src={thumb_shape_1} alt="shape" />
                          <Image className="tp-slider-thumb-2-shape-2" src={thumb_shape_2} alt="shape" />
                        </div>
                        <div className="tp-slider-thumb-2 text-end">
                          <span className="tp-slider-thumb-2-gradient"></span>
                          <Image src={item.img} alt="slider img" priority />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="tp-swiper-dot tp-slider-2-dot"></div>
        </Swiper>
      </section>
    </>
  );
};

export default FashionBanner;