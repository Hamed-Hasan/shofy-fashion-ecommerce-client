import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
// internal
import slider_img_1 from '@assets/img/slider/4/slider-1.png';
import slider_img_2 from '@assets/img/slider/4/slider-2.png';
import slider_img_3 from '@assets/img/slider/4/slider-3.png';
import slider_img_4 from '@assets/img/slider/4/slider-4.png';
// nav icon
import nav_icon_1 from '@assets/img/slider/4/nav/icon-1.png';
import nav_icon_2 from '@assets/img/slider/4/nav/icon-2.png';
import nav_icon_3 from '@assets/img/slider/4/nav/icon-3.png';
import nav_icon_4 from '@assets/img/slider/4/nav/icon-4.png';
import { ArrowNextTwo, ArrowPrevTwo, Pause, Play } from '@/svg';
import text_shape from '@assets/img/slider/4/shape/rounded-test.png';
import Link from 'next/link';

// slider data 
const slider_data = [
  { subtitle: 'The original', title: 'Shine bright', img: slider_img_1 },
  { subtitle: 'The original', title: 'Creative Design', img: slider_img_2 },
  { subtitle: 'The original', title: 'Gold Plateted', img: slider_img_3 },
  { subtitle: 'The original', title: 'Unique shapes', img: slider_img_4 },
]

// slider nav data
const slider_nav_data = [
  { icon: nav_icon_1, title: <>Ring <br />& Earring</> },
  { icon: nav_icon_2, title: <>Bangles & <br />Bracelets</> },
  { icon: nav_icon_3, title: <>Drop <br /> Necklaces</> },
  { icon: nav_icon_4, title: <>Diamond <br /> Necklaces</> },
]

const JewelryBanner = () => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  //  slider setting 
  const main_slider_setting = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    centerMode: false,
  }
  // nav slider setting 
  const nav_slider_setting = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
  }

  // 
  const [play, setPlay] = useState(false);

  const handleToggle = () => {
    if (play === false) {
      setPlay(true);
      const videos = document.querySelectorAll('.tp-slider-video video');
      videos.forEach((video) => video.play());
    } else {
      setPlay(false);
      const videos = document.querySelectorAll('.tp-slider-video video');
      videos.forEach((video) => video.pause());
    }
  };
  return (
    <>
      <section className="tp-slider-area p-relative z-index-1 fix">
        <Slider {...main_slider_setting} asNavFor={slider2} ref={(slider) => setSlider1(slider)} className="tp-slider-active-4 khaki-bg">
          {slider_data.map((item, i) => (
            <div key={i} className="tp-slider-item-4 tp-slider-height-4 p-relative khaki-bg d-flex align-items-center" >
              <div className="tp-slider-thumb-4">
                <Image src={item.img} alt="slider img" />
                <div className="tp-slider-thumb-4-shape">
                  <span className="tp-slider-thumb-4-shape-1"></span>
                  <span className="tp-slider-thumb-4-shape-2"></span>
                </div>
              </div>

              <div className="tp-slider-video-wrapper">
                {/* <!-- video --> */}
                <div className={`tp-slider-video transition-3 ${play?'full-width':''}`}>

                  <video loop>
                    <source type="video/mp4" src="http://weblearnbd.net/tphtml/videos/shofy/jewellery-1.mp4#t=3" />
                  </video>
                </div>
                {/* <!-- video button --> */}
                <div className="tp-slider-play">

                  <button onClick={handleToggle} type="button" className={`tp-slider-play-btn tp-slider-video-move-btn tp-video-toggle-btn ${play?'hide':''}`}>
                    <Image className="text-shape" src={text_shape} alt="text shape" priority />
                    <span className="play-icon">
                      <Play/>
                    </span>
                    <span className="pause-icon">
                      <Pause/>
                    </span>
                  </button>
                </div>
              </div>

              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-8">
                    <div className="tp-slider-content-4 p-relative z-index-1">
                      <span>{item.subtitle}</span>
                      <h3 className="tp-slider-title-4">{item.title}</h3>
                      <div className="tp-slider-btn-4">
                        <Link href="/shop" className="tp-btn tp-btn-border tp-btn-border-white">Discover Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* arrow start */}
        <div className="tp-slider-arrow-4">
          <button className="tp-slider-3-button-prev slick-arrow" onClick={() => slider1?.slickPrev()}>
            <ArrowPrevTwo/>
          </button>
          <button className="tp-slider-3-button-next slick-arrow" onClick={() => slider1?.slickNext()}>
            <ArrowNextTwo/>
          </button>
          </div>
        {/* arrow end */}

        <div className="tp-slider-nav">

          <Slider {...nav_slider_setting} asNavFor={slider1} ref={(slider) => setSlider2(slider)} className="tp-slider-nav-active">
            {slider_nav_data.map((item, i) => (
              <div key={i} className="tp-slider-nav-item d-flex align-items-center">
                <div className="tp-slider-nav-icon">
                  <span>
                    <Image src={item.icon} alt="icon" />
                  </span>
                </div>
                <div className="tp-slider-nav-content">
                  <h3 className="tp-slider-nav-title">{item.title}</h3>
                </div>
              </div>
            ))}
          </Slider>

        </div>
      </section>
    </>
  );
};

export default JewelryBanner;