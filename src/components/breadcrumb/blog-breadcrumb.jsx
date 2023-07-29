import React from "react";
import bg from '@assets/img/breadcrumb/breadcrumb-bg-1.jpg';

const BlogBreadcrumb = () => {
  return (
    <section
      className="breadcrumb__area include-bg pt-150 pb-150 breadcrumb__overlay breadcrumb__style-3"
      style={{backgroundImage:`url(${bg.src})`}}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content text-center p-relative z-index-1">
              <h3 className="breadcrumb__title">Our Blog</h3>
              <div className="breadcrumb__list">
                <span>
                  <a href="#">Home</a>
                </span>
                <span>Blog</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBreadcrumb;
