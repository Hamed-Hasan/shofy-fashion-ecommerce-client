import React from "react";
import SEO from "@/components/seo";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";
import Footer from "@/layout/footers/footer";
import blogData from "@/data/blog-data";
import BlogDetailsAreaTwo from "@/components/blog-details/blog-details-area-2";

const BlogDetailsPageTwo = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Blog Details" />
      <HeaderTwo style_2={true} />
      <BlogDetailsAreaTwo blog={blogData[4]} />
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default BlogDetailsPageTwo;


