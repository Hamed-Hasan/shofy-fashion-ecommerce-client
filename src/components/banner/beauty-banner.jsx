import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper";
// internal
import slider_bg_1 from "@assets/img/slider/3/slider-1.jpg";
import slider_bg_2 from "@assets/img/slider/3/slider-2.jpg";
import slider_bg_3 from "@assets/img/slider/3/slider-3.jpg";
import { ArrowNext, ArrowPrev, Cosmetics, Meckoup, VeganProduct } from "@/svg";

// slider setting
const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".tp-slider-3-button-next",
    prevEl: ".tp-slider-3-button-prev",
  },
  pagination: {
    el: ".tp-slider-3-dot",
    clickable: true,
  },
};

// slider data
const slider_data = [
  {
    id: 1,
    bg: slider_bg_1,
    subtitle: "Winter Collection 2023",
    title: "Be your kind of beauty",
  },
  {
    id: 2,
    bg: slider_bg_2,
    subtitle: "Top Brand Collection",
    title: "Use the best for you.",
  },
  {
    id: 3,
    bg: slider_bg_3,
    subtitle: "Awesome Beauty Products",
    title: "Don't Worry for Skincare",
  },
];

// feature item 
function FeatureItem({ icon, title }) {
  return (
    <div className="tp-slider-feature-item-3 d-flex mb-30">
      <div className="tp-slider-feature-icon-3">
        <span>
          {icon}
        </span>
      </div>
      <div className="tp-slider-feature-content-3">
        <h3 className="tp-slider-feature-title-3">
          {title}
        </h3>
      </div>
    </div>
  )
}

const BeautyBanner = () => {
  return (
    <>
      <section className="tp-slider-area p-relative z-index-1">
        <Swiper
          {...slider_setting}
          modules={[Navigation, EffectFade, Pagination]}
          className="tp-slider-active-3 swiper-container"
        >
          {slider_data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="tp-slider-item-3 tp-slider-height-3 p-relative black-bg d-flex align-items-center"
            >
              <div
                className="tp-slider-thumb-3 include-bg"
                style={{ backgroundImage: `url(${item.bg.src})` }}
              ></div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-8">
                    <div className="tp-slider-content-3">
                      <span>Winter Collection 2023</span>
                      <h3 className="tp-slider-title-3">
                        Be your kind of beauty
                      </h3>
                      <div className="tp-slider-feature-3 d-flex flex-wrap align-items-center p-relative z-index-1 mb-15">
                        <FeatureItem icon={<Cosmetics />} title={<>High-end <br /> Cosmetics</>} />
                        <FeatureItem icon={<VeganProduct />} title={<>Vegan <br /> Product</>} />
                        <FeatureItem icon={<Meckoup />} title={<>Express <br /> Make-up</>} />
                      </div>
                      <div className="tp-slider-btn-3">
                        <Link
                          href="/shop"
                          className="tp-btn tp-btn-border tp-btn-border-white"
                        >
                          Discover Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="tp-swiper-dot tp-slider-3-dot d-sm-none"></div>
          <div className="tp-slider-arrow-3 d-none d-sm-block">
            <button type="button" className="tp-slider-3-button-prev">
              <ArrowPrev />
            </button>
            <button type="button" className="tp-slider-3-button-next">
              <ArrowNext />
            </button>
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default BeautyBanner;
