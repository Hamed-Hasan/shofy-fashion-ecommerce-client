import React from "react";
import Loader from "../loader";

function SingleLoader({ loading }) {
  return (
    <div
      className="col-xl-4 col-sm-6 d-flex align-items-center justify-content-center"
      style={{ height: "250px" }}
    >
      <Loader loading={loading} />
    </div>
  );
}

const HomeGadgetPrdLoader = ({loading}) => {
  return (
    <>
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
    </>
  );
};

export default HomeGadgetPrdLoader;
