import React from "react";
import Image from "next/image";
import { Tags } from "@/svg";
import Link from "next/link";

const BlogItem = ({ blog }) => {
  const { id,img, date, title, tags } = blog || {};
  return (
    <div className="tp-blog-item-2 mb-40">
      <div className="tp-blog-thumb-2 p-relative fix">
        <Link href={`/blog-details/${id}`}>
          <Image src={img} alt="blog img" />
        </Link>
        <div className="tp-blog-meta-date-2">
          <span>{date}</span>
        </div>
      </div>
      <div className="tp-blog-content-2 has-thumbnail">
        <div className="tp-blog-meta-2">
          <span>
            <Tags />
          </span>
          {tags.map((t, i) => (
            <a key={i} href="#">
              {t}
              {i < tags.length - 1 && ", "}
            </a>
          ))}
        </div>
        <h3 className="tp-blog-title-2">
          <Link href={`/blog-details/${id}`}>{title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default BlogItem;
