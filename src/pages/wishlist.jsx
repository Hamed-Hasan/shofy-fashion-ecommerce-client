import React from 'react';
import SEO from '@/components/seo';
import HeaderTwo from '@/layout/headers/header-2';
import Footer from '@/layout/footers/footer';
import Wrapper from '@/layout/wrapper';
import WishlistArea from '@/components/cart-wishlist/wishlist-area';
import CommonBreadcrumb from '@/components/breadcrumb/common-breadcrumb';

const WishlistPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Wishlist" />
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb title="Wishlist" subtitle="Wishlist" />
      <WishlistArea/>
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default WishlistPage;