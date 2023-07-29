import React from "react";
import Loader from "../loader";

function SingleLoader({ loading }) {
  return (
    <div
      className="col-lg-3 col-sm-6 d-flex align-items-center justify-content-center"
      style={{ height: "300px" }}
    >
      <Loader loading={loading} color="BD844C" />
    </div>
  );
}

const HomeThreeCategoryLoader = ({loading}) => {
  return (
    <>
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
    </>
  );
};

export default HomeThreeCategoryLoader;
