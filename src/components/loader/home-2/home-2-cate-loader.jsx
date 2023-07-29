import React from "react";
import Loader from "../loader";

function SingleLoader({ loading }) {
  return (
    <div
      className="col-xxl-4 col-lg-6 d-flex align-items-center justify-content-center"
      style={{ height: "250px" }}
    >
      <Loader loading={loading} color="821F40" />
    </div>
  );
}

const HomeTwoCateLoader = ({ loading }) => {
  return (
    <>
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
    </>
  );
};

export default HomeTwoCateLoader;
