import React from "react";
import Loader from "../loader";

function SingleLoader({ loading }) {
  return (
    <div
      className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex align-items-center"
      style={{ height: "280px" }}
    >
      <Loader loading={loading} color="821F40" />
    </div>
  );
}

const HomeTwoBestSellPrdPrdLoader = ({loading}) => {
  return (
    <>
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
    </>
  );
};

export default HomeTwoBestSellPrdPrdLoader;
