import React from "react";
import Loader from "../loader";

function SingleLoader({ loading }) {
  return (
    <div
      className="col-lg-4 col-sm-6 d-flex align-items-center"
      style={{ height: "280px" }}
    >
      <Loader loading={loading} color="821F40" />
    </div>
  );
}

const HomeTwoFeaturedPrdLoader = ({loading}) => {
  return (
    <div className="row">
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
    </div>
  );
};

export default HomeTwoFeaturedPrdLoader;
