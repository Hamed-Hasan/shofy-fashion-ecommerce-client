import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation,Autoplay } from "swiper";
// internal
import { useGetRelatedProductsQuery } from "@/redux/features/productApi";
import ProductItem from "../products/beauty/product-item";
import ErrorMsg from "../common/error-msg";
import { HomeNewArrivalPrdLoader } from "../loader";

// slider setting
const slider_setting = {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    nextEl: ".tp-related-slider-button-next",
    prevEl: ".tp-related-slider-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const RelatedProducts = ({id}) => {
  const { data: products, isError, isLoading } = useGetRelatedProductsQuery(id);
  // decide what to render
  let content = null;

  if (isLoading) {
    content = <HomeNewArrivalPrdLoader loading={isLoading}/>;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data;
    content = (
      <Swiper
        {...slider_setting}
        modules={[Autoplay, Navigation]}
        className="tp-product-related-slider-active swiper-container mb-10"
      >
        {product_items.map((item) => (
          <SwiperSlide key={item._id}>
            <ProductItem product={item} primary_style={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  return (
    <div className="tp-product-related-slider">
      {content}
    </div>
  );
};

export default RelatedProducts;
