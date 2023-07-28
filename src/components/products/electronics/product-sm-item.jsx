import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";

const ProductSmItem = ({ product }) => {
  const {_id, img, category, title,price, reviews } = product || {};
  const [ratingVal, setRatingVal] = useState(0);

  useEffect(() => {
    if (reviews && reviews.length > 0) {
      const rating =
        reviews.reduce((acc, review) => acc + review.rating, 0) /
        reviews.length;
      setRatingVal(rating);
    } else {
      setRatingVal(0);
    }
  }, [reviews]);

  return (
    <div className="tp-product-sm-item d-flex align-items-center">
      <div className="tp-product-thumb mr-25 fix">
        <Link href={`/product-details/${_id}`}>
          <Image
            src={img}
            alt="product img"
            width={140}
            height={140}
          />
        </Link>
      </div>
      <div className="tp-product-sm-content">
        <div className="tp-product-category">
          <a href="#">{category?.name}</a>
        </div>
        <h3 className="tp-product-title">
          <Link href={`/product-details/${_id}`}>{title}</Link>
        </h3>
        <div className="tp-product-rating d-sm-flex align-items-center">
          <div className="tp-product-rating-icon">
            <Rating allowFraction size={16} initialValue={ratingVal} readonly={true} />
          </div>
          <div className="tp-product-rating-text">
          ({reviews && reviews.length > 0 ? reviews.length : 0} Review)
          </div>
        </div>
        <div className="tp-product-price-wrapper">
          <span className="tp-product-price">${price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductSmItem;
