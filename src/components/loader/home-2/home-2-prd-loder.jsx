import React from "react";
import Loader from "../loader";

function SingleLoader({ loading }) {
  return (
    <div
      className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex align-items-center justify-content-center"
      style={{ height: "300px" }}
    >
      <Loader loading={loading} color="821F40" />
    </div>
  );
}

const HomeTwoPrdLoader = ({loading}) => {
  return (
    <div className="row row-cols-xl-5 row-cols-lg-5 row-cols-md-4">
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
    </div>
  );
};

export default HomeTwoPrdLoader;
