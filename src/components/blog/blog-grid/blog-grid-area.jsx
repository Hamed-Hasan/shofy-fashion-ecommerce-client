import React, { useState } from 'react';
import { GridTab, ListTab } from '@/svg';
import GridItem from './grid-item';
import ListItem from './list-item';
import Pagination from '@/ui/Pagination';
import BlogSidebar from '../blog-postox/blog-sidebar';
import blogData from '@/data/blog-data';

// blog items
const blog_items = blogData.filter((b) => b.blog === "blog-grid");

const BlogGridArea = ({ list_area = false }) => {

  const [filteredRows, setFilteredRows] = useState(blog_items);
  const [currPage, setCurrPage] = useState(1);
  const [pageStart, setPageStart] = useState(0);
  const [countOfPage, setCountOfPage] = useState(6);

  const paginatedData = (items, startPage, pageCount) => {
    setFilteredRows(items);
    setPageStart(startPage);
    setCountOfPage(pageCount);
  };

  return (
    <>
      <section className="tp-blog-grid-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="tp-blog-grid-wrapper">
                <div className="tp-blog-grid-top d-flex justify-content-between mb-40">
                  <div className="tp-blog-grid-result">
                    <p>Showing 1–{filteredRows.slice(pageStart, pageStart + countOfPage).length} of {blog_items.length} results</p>
                  </div>
                  <div className="tp-blog-grid-tab tp-tab">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className={`nav-link ${list_area ? '' : 'active'}`} id="nav-grid-tab" data-bs-toggle="tab" data-bs-target="#nav-grid" type="button" role="tab" aria-controls="nav-grid" aria-selected="true">
                          <ListTab />
                        </button>
                        <button className={`nav-link ${list_area ? 'active' : ''}`} id="nav-list-tab" data-bs-toggle="tab" data-bs-target="#nav-list" type="button" role="tab" aria-controls="nav-list" aria-selected="false">
                          <GridTab />
                        </button>
                      </div>
                    </nav>
                  </div>
                </div>

                <div className="tab-content" id="nav-tabContent">
                  <div className={`tab-pane fade ${list_area ? '' : 'show active'}`} id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab" tabIndex="0">
                    {/*  blog grid item wrapper */}
                    <div className="tp-blog-grid-item-wrapper">
                      <div className="row tp-gx-30">
                        {filteredRows.slice(pageStart, pageStart + countOfPage).map((blog, i) => (
                          <div key={i} className="col-lg-6 col-md-6">
                            <GridItem blog={blog} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={`tab-pane fade ${list_area ? 'show active' : ''}`} id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab" tabIndex="0">
                    {/* blog list wrapper */}
                    <div className="tp-blog-list-item-wrapper">
                      {filteredRows.slice(pageStart, pageStart + countOfPage).map((blog, i) => (
                        <ListItem key={i} blog={blog} />
                      ))}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tp-blog-pagination mt-30">
                        <div className="tp-pagination">
                          <Pagination
                            items={blog_items}
                            countOfPage={6}
                            paginatedData={paginatedData}
                            currPage={currPage}
                            setCurrPage={setCurrPage}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              {/* blog sidebar start  */}
              <BlogSidebar />
              {/* blog sidebar end  */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridArea;