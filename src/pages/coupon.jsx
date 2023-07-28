import React from 'react';
import SEO from '@/components/seo';
import HeaderTwo from '@/layout/headers/header-2';
import Footer from '@/layout/footers/footer';
import Wrapper from '@/layout/wrapper';
import CommonBreadcrumb from '@/components/breadcrumb/common-breadcrumb';
import CouponArea from '@/components/coupon/coupon-area';

const CouponPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Coupon" />
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb title="Grab Best Offer" subtitle="Coupon" />
      <CouponArea/>
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default CouponPage;