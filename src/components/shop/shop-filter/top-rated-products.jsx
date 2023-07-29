import React from 'react';
import Image from 'next/image';
import { Rating } from 'react-simple-star-rating';
import Link from 'next/link';
// internal
import ErrorMsg from '@/components/common/error-msg';
import { useGetTopRatedProductsQuery } from '@/redux/features/productApi';
import ShopTopRatedLoader from '@/components/loader/shop/top-rated-prd-loader';

const TopRatedProducts = () => {
  const { data: products, isError, isLoading } = useGetTopRatedProductsQuery();
  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <ShopTopRatedLoader loading={isLoading}/>
    );
  }
  else if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  else if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  else if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data.slice(0, 3);
    content = product_items.map((item) => (
      <div key={item._id} className="tp-shop-widget-product-item d-flex align-items-center">
        <div className="tp-shop-widget-product-thumb">
          <Link href={`/product-details/${item._id}`}>
            <Image src={item.img} alt="product img" width={70} height={70} />
          </Link>
        </div>
        <div className="tp-shop-widget-product-content">
          <div className="tp-shop-widget-product-rating-wrapper d-flex align-items-center">
            <div className="tp-shop-widget-product-rating">
              <Rating allowFraction size={16} initialValue={item.rating} readonly={true} />
            </div>
            <div className="tp-shop-widget-product-rating-number">
              <span>({item.rating})</span>
            </div>
          </div>
          <h4 className="tp-shop-widget-product-title">
            <Link href={`/product-details/${item._id}`}>{item.title.substring(0,20)}...</Link>
          </h4>
          <div className="tp-shop-widget-product-price-wrapper">
            <span className="tp-shop-widget-product-price">${item.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    ))
  }
  return (
    <>
      <div className="tp-shop-widget mb-50">
        <h3 className="tp-shop-widget-title">Top Rated Products</h3>
        <div className="tp-shop-widget-content">
          <div className="tp-shop-widget-product">
            {content}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRatedProducts;