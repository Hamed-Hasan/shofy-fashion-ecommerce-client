import React, { useState, useEffect } from "react";
import DetailsThumbWrapper from "./details-thumb-wrapper";
import DetailsWrapper from "./details-wrapper";
import { useDispatch } from "react-redux";
import DetailsTabNav from "./details-tab-nav";
import RelatedProducts from "./related-products";

const ProductDetailsArea = ({ productItem }) => {
  const { _id, img, imageURLs, videoId,status } = productItem || {};
  const [activeImg, setActiveImg] = useState(img);
  const dispatch = useDispatch();
  // active image change when img change
  useEffect(() => {
    setActiveImg(img);
  }, [img]);

  // handle image active
  const handleImageActive = (item) => {
    setActiveImg(item.img);
  };
  return (
    <section className="tp-product-details-area">
      <div className="tp-product-details-top pb-115">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              {/* product-details-thumb-wrapper start */}
              <DetailsThumbWrapper
                activeImg={activeImg}
                handleImageActive={handleImageActive}
                imageURLs={imageURLs}
                imgWidth={580}
                imgHeight={670}
                videoId={videoId}
                status={status}
              />
              {/* product-details-thumb-wrapper end */}
            </div>
            <div className="col-xl-5 col-lg-6">
              {/* product-details-wrapper start */}
              <DetailsWrapper
                productItem={productItem}
                handleImageActive={handleImageActive}
                activeImg={activeImg}
                detailsBottom={true}
              />
              {/* product-details-wrapper end */}
            </div>
          </div>
        </div>
      </div>

      {/* product details description */}
      <div className="tp-product-details-bottom pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <DetailsTabNav product={productItem} />
            </div>
          </div>
        </div>
      </div>
      {/* product details description */}

      {/* related products start */}
      <section className="tp-related-product pt-95 pb-50">
        <div className="container">
          <div className="row">
            <div className="tp-section-title-wrapper-6 text-center mb-40">
              <span className="tp-section-title-pre-6">Next day Products</span>
              <h3 className="tp-section-title-6">Related Products</h3>
            </div>
          </div>
          <div className="row">
            <RelatedProducts id={_id} />
          </div>
        </div>
      </section>
      {/* related products end */}
    </section>
  );
};

export default ProductDetailsArea;
