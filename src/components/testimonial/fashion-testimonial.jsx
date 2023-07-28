import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Rating } from 'react-simple-star-rating';
// internal
import { ArrowRightLong, PrevLongArrTwo } from '@/svg';
import { fashion_testi_data } from '@/data/testimonial-data';

// slider setting
const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".tp-testimonial-slider-dot",
    clickable: true,
  },
  navigation: {
    nextEl: ".tp-testimonial-slider-button-next",
    prevEl: ".tp-testimonial-slider-button-prev",
  },
}

const FashionTestimonial = () => {
  return (
    <>
      <section className="tp-testimonial-area grey-bg-7 pt-130 pb-135">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="tp-testimonial-slider p-relative z-index-1">
                <div className="tp-testimonial-shape">
                  <span className="tp-testimonial-shape-gradient"></span>
                </div>
                <h3 className="tp-testimonial-section-title text-center">The Review Are In</h3>
                <div className="row justify-content-center">
                  <div className="col-xl-8 col-lg-8 col-md-10">

                    <Swiper {...slider_setting} modules={[Navigation, Pagination]} className="tp-testimonial-slider-active swiper-container">
                      {fashion_testi_data.map(item => (
                        <SwiperSlide key={item.id} className="tp-testimonial-item text-center mb-20">
                          <div className="tp-testimonial-rating">
                            <span><Rating fillColor='#821F40' readonly={true} allowFraction size={20} initialValue={item.review}/></span>
                          </div>
                          <div className="tp-testimonial-content">
                            <p>{item.desc}</p>
                          </div> 
                          <div className="tp-testimonial-user-wrapper d-flex align-items-center justify-content-center">
                            <div className="tp-testimonial-user d-flex align-items-center">
                              <div className="tp-testimonial-avater mr-10">
                                <Image src={item.user} alt="user img" />
                              </div>
                              <div className="tp-testimonial-user-info tp-testimonial-user-translate">
                                <h3 className="tp-testimonial-user-title">{item.name}</h3>
                                <span className="tp-testimonial-designation">{item.designation}</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div className="tp-testimonial-arrow d-none d-md-block">
                  <button className="tp-testimonial-slider-button-prev">
                    <PrevLongArrTwo />
                  </button>
                  <button className="tp-testimonial-slider-button-next">
                    <ArrowRightLong />
                  </button>
                </div>
                <div className="tp-testimonial-slider-dot tp-swiper-dot text-center mt-30 tp-swiper-dot-style-darkRed d-md-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(FashionTestimonial), { ssr: false });