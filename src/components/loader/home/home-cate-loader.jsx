import React from "react";
import Loader from "../loader";

function SingleLoader({ loading }) {
  return (
    <div className="col d-flex align-items-center justify-content-center" style={{ height: "200px" }}>
      <Loader loading={loading} />
    </div>
  );
}

const HomeCateLoader = ({ loading }) => {
  return (
    <>
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
    </>
  );
};

export default HomeCateLoader;
