import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Image from 'next/image';
import { Rating } from 'react-simple-star-rating';
import dynamic from 'next/dynamic';
// internal
import { beauty_testi_data } from '@/data/testimonial-data';
import quote from '@assets/img/testimonial/testimonial-quote.png';

// slider setting 
const slider_setting = {
  slidesPerView: 2,
  spaceBetween: 24,
  pagination: {
    el: ".tp-testimoinal-slider-dot-3",
    clickable: true,
  },
  navigation: {
    nextEl: ".tp-testimoinal-slider-button-next-3",
    prevEl: ".tp-testimoinal-slider-button-prev-3",
  },
  breakpoints: {
    '992': {
      slidesPerView: 2,
    },
    '576': {
      slidesPerView: 1,
    },
    '0': {
      slidesPerView: 1,
    },
  }
}

const BeautyTestimonial = () => {
  return (
    <>
      <section className="tp-testimonial-area pt-115 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title-wrapper-3 mb-45 text-center">
                <span className="tp-section-title-pre-3">Customers Review</span>
                <h3 className="tp-section-title-3">What our Clients say</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-testimonial-slider-3">
                <Swiper {...slider_setting} modules={[Pagination, Navigation]} className="tp-testimoinal-slider-active-3 swiper-container">
                  {beauty_testi_data.map((item) => (
                    <SwiperSlide key={item.id} className="tp-testimonial-item-3 grey-bg-7 p-relative z-index-1">
                      <div className="tp-testimonial-shape-3">
                        <Image className="tp-testimonial-shape-3-quote" src={quote} alt="quote img" />
                      </div>
                      <div className="tp-testimonial-rating tp-testimonial-rating-3">
                        <Rating fillColor='#010F1C' readonly={true} allowFraction size={20} initialValue={item.review} />
                      </div>
                      <div className="tp-testimonial-content-3">
                        <p>{item.desc}</p>
                      </div>
                      <div className="tp-testimonial-user-wrapper-3 d-flex">
                        <div className="tp-testimonial-user-3 d-flex align-items-center">
                          <div className="tp-testimonial-avater-3 mr-10">
                            <Image src={item.user} alt="user img" />
                          </div>
                          <div className="tp-testimonial-user-3-info tp-testimonial-user-translate">
                            <h3 className="tp-testimonial-user-3-title">{item.name} /</h3>
                            <span className="tp-testimonial-3-designation">{item.designation}</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="tp-testimoinal-slider-dot-3 tp-swiper-dot-border text-center mt-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(BeautyTestimonial), { ssr: false });