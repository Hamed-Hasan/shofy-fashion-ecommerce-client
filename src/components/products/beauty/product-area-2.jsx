import React, { useEffect, useRef, useState } from "react";
import ProductItem from "./product-item";
import ErrorMsg from "@/components/common/error-msg";
import { useGetProductTypeQuery } from "@/redux/features/productApi";
import { HomeThreePrdTwoLoader } from "@/components/loader";

// tabs
const tabs = ["All Collection", "Trending", "Beauty", "Cosmetics"];

const ProductAreaTwo = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductTypeQuery({ type: "beauty" });
  const activeRef = useRef(null);
  const marker = useRef(null);

  // handleActive
  const handleActive = (e, tab) => {
    setActiveTab(tab);
    if (e.target.classList.contains("active")) {
      marker.current.style.left = e.target.offsetLeft + "px";
      marker.current.style.width = e.target.offsetWidth + "px";
    }
  };

  useEffect(() => {
    if (
      activeTab &&
      activeRef.current &&
      activeRef.current.classList.contains("active")
    ) {
      marker.current.style.left = activeRef.current.offsetLeft + "px";
      marker.current.style.width = activeRef.current.offsetWidth + "px";
    }
  }, [activeTab, products]);

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <HomeThreePrdTwoLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    let product_items = products.data;
    if (activeTab === "All Collection") {
      product_items = products.data;
    } else if (activeTab === "Trending") {
      product_items = products.data
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (activeTab === "Beauty") {
      product_items = products.data.filter(
        (p) => p.category.name === "Discover Skincare"
      );
    } else if (activeTab === "Cosmetics") {
      product_items = products.data.filter(
        (p) => p.category.name === "Awesome Lip Care"
      );
    } else {
      product_items = products.data;
    }
    content = (
      <>
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-section-title-wrapper-3 mb-45 text-center text-lg-start">
              <span className="tp-section-title-pre-3">
                Best Seller This Week’s
              </span>
              <h3 className="tp-section-title-3">Enjoy the best quality</h3>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-product-tab-2 tp-product-tab-3  tp-tab mb-50 text-center">
              <div className="tp-product-tab-inner-3 d-flex align-items-center justify-content-center justify-content-lg-end">
                <nav>
                  <div
                    className="nav nav-tabs justify-content-center tp-product-tab tp-tab-menu p-relative"
                    id="nav-tab"
                    role="tablist"
                  >
                    {tabs.map((tab, i) => (
                      <button
                        key={i}
                        ref={activeTab === tab ? activeRef : null}
                        onClick={(e) => handleActive(e, tab)}
                        className={`nav-link text-capitalize ${
                          activeTab === tab ? "active" : ""
                        }`}
                      >
                        {tab.split("-").join(" ")}
                        <span className="tp-product-tab-tooltip">
                          {product_items.length}
                        </span>
                      </button>
                    ))}
                    <span
                      ref={marker}
                      id="productTabMarker"
                      className="tp-tab-line d-none d-sm-inline-block"
                    ></span>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {product_items.map((prd) => (
            <div key={prd._id} className="col-lg-3 col-md-4 col-sm-6">
              <ProductItem product={prd} />
            </div>
          ))}
        </div>
      </>
    );
  }
  return (
    <>
      <section className="tp-best-area pb-60 pt-130">
        <div className="container">{content}</div>
      </section>
    </>
  );
};

export default ProductAreaTwo;
