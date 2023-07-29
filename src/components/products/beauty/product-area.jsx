import React from 'react';
import Link from 'next/link';
// internal
import { ArrowRightSmTwo } from '@/svg';
import ProductItem from './product-item';
import ErrorMsg from '@/components/common/error-msg';
import { useGetProductTypeQuery } from '@/redux/features/productApi';
import { HomeThreePrdLoader } from '@/components/loader';

const ProductArea = () => {
  const { data: products, isError, isLoading } =
    useGetProductTypeQuery({ type: 'beauty', query: `topSellers=true` });
  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <HomeThreePrdLoader loading={isLoading} />
    );
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data.slice(0, 8);
    content = product_items.map((prd) => (
      <div key={prd._id} className="col-lg-3 col-md-4 col-sm-6">
        <ProductItem product={prd} />
      </div>
    ))
  }
  return (
    <>
      <section className="tp-product-area grey-bg-8 pt-95 pb-80">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-8">
              <div className="tp-section-title-wrapper-3 mb-55">
                <span className="tp-section-title-pre-3">Shop by Category</span>
                <h3 className="tp-section-title-3">Best sellers in beauty</h3>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="tp-product-more-3 text-md-end mb-65">
                <Link href="/shop" className="tp-btn">
                  Shop All Products
                  {" "}<ArrowRightSmTwo />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {content}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductArea;