import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { ArrowRightLong, Comment, Date } from "@/svg";

const ListItem = ({blog}) => {
  const {id,list_img,date,comments,author,title,desc} = blog || {};
  return (
    <div className="tp-blog-list-item d-md-flex d-lg-block d-xl-flex">
      <div className="tp-blog-list-thumb">
        <Link href={`/blog-details/${id}`}>
          <Image src={list_img} alt="blog img"/>
        </Link>
      </div>
      <div className="tp-blog-list-content">
        <div className="tp-blog-grid-content">
          <div className="tp-blog-grid-meta">
            <span>
              <span>
                <Date/>
              </span>
             {" "}{date}
            </span>
            <span>
              <span>
                <Comment/>
              </span>
              {" "}Comments ({comments})
            </span>
          </div>
          <h3 className="tp-blog-grid-title">
            <Link href={`/blog-details/${id}`}>{title}</Link>
          </h3>
          <p>{desc}</p>

          <div className="tp-blog-grid-btn">
            <Link href={`/blog-details/${id}`} className="tp-link-btn-3">
              Read More{" "}
              <span>
                <ArrowRightLong/>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;