import React from "react";
import Image from "next/image";
// internal
import insta_1 from "@assets/img/instagram/2/insta-1.jpg";
import insta_2 from "@assets/img/instagram/2/insta-2.jpg";
import insta_3 from "@assets/img/instagram/2/insta-3.jpg";
import insta_4 from "@assets/img/instagram/2/insta-4.jpg";
import insta_icon from "@assets/img/instagram/2/insta-icon.png";

// instagram data
const instagram_data = [
  { id: 1, link: "https://www.instagram.com/", img: insta_1 },
  { id: 2, link: "https://www.instagram.com/", img: insta_2 },
  { id: 3, link: "https://www.instagram.com/", banner: true, img: insta_icon },
  { id: 4, link: "https://www.instagram.com/", img: insta_3 },
  { id: 5, link: "https://www.instagram.com/", img: insta_4 },
];

const InstagramAreaTwo = () => {
  return (
    <>
      <section className="tp-instagram-area">
        <div className="container-fluid pl-20 pr-20">
          <div className="row row-cols-lg-5 row-cols-sm-2 row-cols-1 gx-2 gy-2 gy-lg-0">
            {instagram_data.map((item) =>
              item.banner ? (
                <div key={item.id} className="col">
                  <div className="tp-instagram-banner text-center">
                    <div className="tp-instagram-banner-icon mb-40">
                      <a href={item.link} target="_blank">
                        <Image
                          src={item.img}
                          alt="instagram img"
                        />
                      </a>
                    </div>
                    <div className="tp-instagram-banner-content">
                      <span>Follow Us on</span>
                      <a href={item.link} target="_blank">Instagram</a>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={item.id} className="col">
                  <div className="tp-instagram-item-2">
                    <Image src={item.img} alt="user image" style={{width:'100%',height:'100%'}} />
                    <div className="tp-instagram-icon-2">
                      <a href={item.link} target="_blank" className="popup-image">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default InstagramAreaTwo;
