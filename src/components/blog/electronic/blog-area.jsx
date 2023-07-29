import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
// internal
import { ArrowRightLong, ShapeLine } from '@/svg';
import blogData from '@/data/blog-data';
import BlogItem from './blog-item';
import Link from 'next/link';

// slider setting 
const slider_setting = {
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".tp-blog-main-slider-button-next",
    prevEl: ".tp-blog-main-slider-button-prev",
  },
  pagination: {
    el: ".tp-blog-main-slider-dot",
    clickable: true,
  },
  breakpoints: {
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 2,
    },
    '768': {
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

const BlogArea = () => {
  const blogs = blogData.filter(b => b.blog === 'electronics')
  return (
    <section className="tp-blog-area pt-50 pb-75">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-4 col-md-6">
            <div className="tp-section-title-wrapper mb-50">
              <h3 className="tp-section-title">Latest news & articles
                <ShapeLine />
              </h3>
            </div>
          </div>
          <div className="col-xl-8 col-md-6">
            <div className="tp-blog-more-wrapper d-flex justify-content-md-end">
              <div className="tp-blog-more mb-50 text-md-end">
                <Link href="/blog" className="tp-btn tp-btn-2 tp-btn-blue">View All Blog
                  <ArrowRightLong />
                </Link>
                <span className="tp-blog-more-border"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-blog-main-slider">
              <Swiper {...slider_setting} modules={[Pagination,Navigation,Autoplay]} className="tp-blog-main-slider-active swiper-container">
                {blogs.map((blog) => (
                  <SwiperSlide key={blog.id}>
                    <BlogItem blog={blog} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;