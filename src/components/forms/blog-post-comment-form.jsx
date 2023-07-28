import React from 'react';

const BlogPostCommentForm = () => {
  return (
    <form >
      <div className="tp-postbox-details-form-wrapper">
        <div className="tp-postbox-details-form-inner">
          <div className="tp-postbox-details-input-box">
            <div className="tp-contact-input">
              <input name="name" id="name" type="text" placeholder="Shahnewaz Sakil" />
            </div>
            <div className="tp-postbox-details-input-title">
              <label htmlFor="name">Your Name</label>
            </div>
          </div>
          <div className="tp-postbox-details-input-box">
            <div className="tp-contact-input">
              <input name="email" id="email" type="email" placeholder="shofy@mail.com" />
            </div>
            <div className="tp-postbox-details-input-title">
              <label htmlFor="email">Your Email</label>
            </div>
          </div>
          <div className="tp-postbox-details-input-box">
            <div className="tp-contact-input">
              <textarea id="msg" placeholder="Write your message here..."></textarea>
            </div>
            <div className="tp-postbox-details-input-title">
              <label htmlFor="msg">Your Message</label>
            </div>
          </div>
        </div>
        <div className="tp-postbox-details-suggetions mb-20">
          <div className="tp-postbox-details-remeber">
            <input id="remeber" type="checkbox" />
            <label htmlFor="remeber">Save my name, email, and website in this browser for the next time I comment.</label>
          </div>
        </div>
        <div className="tp-postbox-details-input-box">
          <button className="tp-postbox-details-input-btn" type="submit">Post Comment</button>
        </div>
      </div>
    </form>
  );
};

export default BlogPostCommentForm;