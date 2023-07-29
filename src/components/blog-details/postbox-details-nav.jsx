import React from 'react';
import Link from 'next/link';
import { ArrowRightLong, ArrowRightLongPrev } from '@/svg';

const PostboxDetailsNav = () => {
  return (
    <div className="tp-postbox-details-navigation d-none d-md-flex justify-content-between align-items-center">
      <div className="tp-postbox-details-navigation-item d-flex align-items-center">
        <div className="tp-postbox-details-navigation-icon mr-15">
          <span>
            <Link href="/blog-details">
              <ArrowRightLongPrev/>
            </Link>
          </span>
        </div>
        <div className="tp-postbox-details-navigation-content">
          <span>Previous Post</span>
          <h3 className="tp-postbox-details-navigation-title">
            <Link href="/blog-details">Hiring the Right Sales Team at <br /> the Right Time</Link>
          </h3>
        </div>
      </div>
      <div className="tp-postbox-details-navigation-item d-flex align-items-center text-end">
        <div className="tp-postbox-details-navigation-content">
          <span>Next Post</span>
          <h3 className="tp-postbox-details-navigation-title">
            <Link href="/blog-details">Fully embrace the return of <br /> 90s fashion</Link>
          </h3>
        </div>
        <div className="tp-postbox-details-navigation-icon ml-15">
          <span>
            <Link href="/blog-details">
              <ArrowRightLong/>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostboxDetailsNav;