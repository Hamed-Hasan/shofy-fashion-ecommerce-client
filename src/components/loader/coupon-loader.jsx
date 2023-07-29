import React from "react";
import Loader from "./loader";

function SingleLoader({ loading }) {
  return (
    <div
      className="col-xl-6 d-flex align-items-center justify-content-center"
      style={{ height: "150px" }}
    >
      <Loader loading={loading} />
    </div>
  );
}

const CouponLoader = ({ loading }) => {
  return (
    <>
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
    </>
  );
};

export default CouponLoader;
