import React from "react";
import Loader from "../loader";

function SingleLoader({ loading }) {
  return (
    <div
      className="col-lg-4 col-sm-6 d-flex align-items-center justify-content-center"
      style={{ height: "400px" }}
    >
      <Loader loading={loading} />
    </div>
  );
}

const HomeOfferPrdLoader = ({loading}) => {
  return (
    <div className="row">
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
    </div>
  );
};

export default HomeOfferPrdLoader;
