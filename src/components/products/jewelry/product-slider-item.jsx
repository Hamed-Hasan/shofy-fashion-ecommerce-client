import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
// internal
import { AddCart, Cart, QuickView, Wishlist } from "@/svg";
import { handleProductModal } from "@/redux/features/productModalSlice";
import { add_cart_product } from "@/redux/features/cartSlice";
import { add_to_wishlist } from "@/redux/features/wishlist-slice";
import { notifyError } from "@/utils/toast";

const ProductSliderItem = ({ product }) => {
  const { _id, title, price, img,status } = product || {};
  const { cart_products } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const isAddedToCart = cart_products.some((prd) => prd._id === _id);
  const isAddedToWishlist = wishlist.some((prd) => prd._id === _id);
  const dispatch = useDispatch();

  // handle add product
  const handleAddProduct = (prd) => {
    if (prd.status === 'out-of-stock') {
      notifyError(`This product out-of-stock`)
    }
    else {
      dispatch(add_cart_product(prd));
    }
  };
  // handle wishlist product
  const handleWishlistProduct = (prd) => {
    dispatch(add_to_wishlist(prd));
  };
  return (
    <div className="tp-category-item-4 p-relative z-index-1 fix text-center">
      <div
        className="tp-category-thumb-4 include-bg"
        style={{
          backgroundImage: `url(${img})`,
          backgroundColor: "#FFFFFF",
          backgroundPosition: "0px -80px",
        }}
      ></div>
      <div className="tp-product-action-3 tp-product-action-4 tp-product-action-blackStyle tp-product-action-brownStyle">
        <div className="tp-product-action-item-3 d-flex flex-column">
          {isAddedToCart ? (
            <Link
              href="/cart"
              className={`tp-product-action-btn-3 ${isAddedToCart ? 'active' : ''} tp-product-add-cart-btn`}
            >
              <Cart />
              <span className="tp-product-tooltip">View Cart</span>
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => handleAddProduct(product)}
              className={`tp-product-action-btn-3 ${isAddedToCart ? 'active' : ''} tp-product-add-cart-btn`}
            >
              <Cart />
              <span className="tp-product-tooltip">Add to Cart</span>
            </button>
          )}
          <button
            type="button"
            className="tp-product-action-btn-3 tp-product-quick-view-btn"
            onClick={() => dispatch(handleProductModal(product))}
          >
            <QuickView />
            <span className="tp-product-tooltip">Quick View</span>
          </button>
          <button
            type="button"
            onClick={() => handleWishlistProduct(product)}
            className={`tp-product-action-btn-3 ${isAddedToWishlist ? 'active' : ''} tp-product-add-to-wishlist-btn`}
          >
            <Wishlist />
            <span className="tp-product-tooltip">Add To Wishlist</span>
          </button>
        </div>
      </div>
      <div className="tp-category-content-4">
        <h3 className="tp-category-title-4">
          <Link href={`/product-details/${_id}`}>{title}</Link>
        </h3>
        <div className="tp-category-price-wrapper-4">
          <span className="tp-category-price-4">${price.toFixed(2)}</span>
          <div className="tp-category-add-to-cart">
            {isAddedToCart ? (
              <Link href="/cart" className="tp-category-add-to-cart-4">
                <AddCart />{" "}View Cart
              </Link>
            ) : (
              <button onClick={() => handleAddProduct(product)} className="tp-category-add-to-cart-4">
                <AddCart />{" "}Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSliderItem;
