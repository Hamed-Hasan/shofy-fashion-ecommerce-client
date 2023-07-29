import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
// internal
import logo_1 from '@assets/img/brand/logo_01.png';
import logo_2 from '@assets/img/brand/logo_02.png';
import logo_3 from '@assets/img/brand/logo_03.png';
import logo_4 from '@assets/img/brand/logo_04.png';
import logo_5 from '@assets/img/brand/logo_05.png';
import logo_6 from '@assets/img/brand/logo_02.png';
import logo_7 from '@assets/img/brand/logo_04.png';
import { ArrowNextSm, ArrowPrevSm } from '@/svg';

// brand data 
const brand_data = [logo_1, logo_2, logo_3, logo_4, logo_5,logo_6,logo_7]

// slider setting 
const slider_setting = {
  slidesPerView: 5,
  spaceBetween: 0,
  navigation: {
    nextEl: ".tp-brand-slider-button-next",
    prevEl: ".tp-brand-slider-button-prev",
  },
  breakpoints: {
    '992': {
      slidesPerView: 5,
    },
    '768': {
      slidesPerView: 4,
    },
    '576': {
      slidesPerView: 3,
    },
    '0': {
      slidesPerView: 1,
    },
  }
}

const JewelryBrands = () => {
  return (
    <>
      <section className="tp-brand-area pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-brand-slider p-relative">
                <Swiper {...slider_setting} modules={[Navigation]} className="tp-brand-slider-active swiper-container">
                  {brand_data.map((logo, i) => (
                    <SwiperSlide key={i} className="tp-brand-item text-center">
                      <a href="#">
                        <Image src={logo} alt="brand img" />
                      </a>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="tp-brand-slider-arrow">
                  <button className="tp-brand-slider-button-prev">
                    <ArrowPrevSm />
                  </button>
                  <button className="tp-brand-slider-button-next">
                    <ArrowNextSm />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JewelryBrands;