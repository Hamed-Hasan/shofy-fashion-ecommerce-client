import React from 'react';
import SEO from '@/components/seo';
import HeaderTwo from '@/layout/headers/header-2';
import Footer from '@/layout/footers/footer';
import Wrapper from '@/layout/wrapper';
import ShopBreadcrumb from '@/components/breadcrumb/shop-breadcrumb';
import ShopCategoryArea from '@/components/categories/shop-category-area';

const CategoryPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Shop Category" />
      <HeaderTwo style_2={true} />
      <ShopBreadcrumb title="Only Categories" subtitle="Only Categories" />
      <ShopCategoryArea/>
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default CategoryPage;