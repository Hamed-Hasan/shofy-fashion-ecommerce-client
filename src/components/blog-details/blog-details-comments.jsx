import React from "react";
import comment_data from "@/data/blog-comment-data";
import Image from "next/image";

const BlogDetailsComments = () => {
  return (
    <div className="tp-postbox-details-comment-inner">
      <ul>
        {comment_data.map((comment) => (
          <li key={comment.id}>
            <div className="tp-postbox-details-comment-box d-sm-flex align-items-start">
              <div className="tp-postbox-details-comment-thumb">
                <Image src={comment.user} alt="user img" />
              </div>
              <div className="tp-postbox-details-comment-content">
                <div className="tp-postbox-details-comment-top d-flex justify-content-between align-items-start">
                  <div className="tp-postbox-details-comment-avater">
                    <h4 className="tp-postbox-details-comment-avater-title">
                      {comment.name}
                    </h4>
                    <span className="tp-postbox-details-avater-meta">
                      {comment.date}
                    </span>
                  </div>
                  <div className="tp-postbox-details-comment-reply">
                    <a href="#">Reply</a>
                  </div>
                </div>
                <p>{comment.desc}</p>
              </div>
            </div>
            {comment.children && (
              <ul className="children">
                <li>
                  <div className="tp-postbox-details-comment-box d-sm-flex align-items-start">
                    <div className="tp-postbox-details-comment-thumb">
                      <Image src={comment.children.user} alt="user img" />
                    </div>
                    <div className="tp-postbox-details-comment-content">
                      <div className="tp-postbox-details-comment-top d-flex justify-content-between align-items-start">
                        <div className="tp-postbox-details-comment-avater">
                          <h4 className="tp-postbox-details-comment-avater-title">
                            {comment.children.name}
                          </h4>
                          <span className="tp-postbox-details-avater-meta">
                            {comment.children.date}
                          </span>
                        </div>
                        <div className="tp-postbox-details-comment-reply">
                          <a href="#">Reply</a>
                        </div>
                      </div>
                      <p>{comment.children.desc}</p>
                    </div>
                  </div>
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetailsComments;
