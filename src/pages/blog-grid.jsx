import React from "react";
import SEO from "@/components/seo";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";
import Footer from "@/layout/footers/footer";
import SectionTitle from "@/components/blog/blog-grid/section-title";
import BlogGridArea from "@/components/blog/blog-grid/blog-grid-area";

const BlogGridPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Blog Grid" />
      <HeaderTwo style_2={true} />
      <SectionTitle/>
      <BlogGridArea/>
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default BlogGridPage;
