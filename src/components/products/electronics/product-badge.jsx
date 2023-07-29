import React from "react";

const ProductBadge = ({badge}) => {
  return (
    <div className="tp-product-badge">
      <span className={`product-${badge}`}>{badge}</span>
    </div>
  );
};

export default ProductBadge;
