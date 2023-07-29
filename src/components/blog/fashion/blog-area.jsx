import React from 'react';
import Link from 'next/link';
// internal
import blogData from '@/data/blog-data';
import { TextShapeLine } from '@/svg';
import BlogItem from './blog-item';

const BlogArea = () => {
  const blogs = blogData.filter(b => b.blog === 'fashion')
  return (
    <>
      <section className="tp-blog-area pt-110 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title-wrapper-2 mb-50 text-center">
                <span className="tp-section-title-pre-2">
                  Our Blog & News
                  <TextShapeLine />
                </span>
                <h3 className="tp-section-title-2">Latest News & Articles</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {blogs.map(blog => (
              <div key={blog.id} className="col-xl-4 col-lg-4 col-md-6">
                <BlogItem blog={blog} />
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-blog-more-2 mt-10 text-center">
                <Link href="/blog" className="tp-btn tp-btn-border tp-btn-border-sm">Discover More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;