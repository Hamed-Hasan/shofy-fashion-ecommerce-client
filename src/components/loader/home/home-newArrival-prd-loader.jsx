import React from "react";
import Loader from "../loader";

function SingleLoader({ loading }) {
  return (
    <div
      className="col-lg-3 col-sm-6 d-flex align-items-center justify-content-center"
      style={{ height: "350px" }}
    >
      <Loader loading={loading} />
    </div>
  );
}

const HomeNewArrivalPrdLoader = ({loading}) => {
  return (
    <div className="row">
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
    </div>
  );
};

export default HomeNewArrivalPrdLoader;
