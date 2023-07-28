import { useState } from "react";
// internal
import blogData from "@/data/blog-data";
import BlogSidebar from "./blog-sidebar";
import Pagination from "@/ui/Pagination";
import BlogItem from "./blog-item";

// blog items
const blog_items = blogData.filter((b) => b.blog === "blog-postbox");


const BlogPostboxArea = () => {
  const [filteredRows, setFilteredRows] = useState(blog_items);
  const [currPage, setCurrPage] = useState(1);
  const [pageStart, setPageStart] = useState(0);
  const [countOfPage, setCountOfPage] = useState(4);

  const paginatedData = (items, startPage, pageCount) => {
    setFilteredRows(items);
    setPageStart(startPage);
    setCountOfPage(pageCount);
  };
  return (
    <>
      <section className="tp-postbox-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="tp-postbox-wrapper pr-50">
                {filteredRows.slice(pageStart, pageStart + countOfPage).map((item) => (
                  <BlogItem key={item.id} item={item} />
                ))}
                <div className="tp-blog-pagination mt-50">
                  <div className="tp-pagination">
                    <Pagination
                      items={blog_items}
                      countOfPage={4}
                      paginatedData={paginatedData}
                      currPage={currPage}
                      setCurrPage={setCurrPage}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostboxArea;
