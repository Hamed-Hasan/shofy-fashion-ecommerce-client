import React from "react";
import Loader from "../loader";

function SingleLoader({ loading }) {
  return (
    <div style={{ height: "70px" }}>
      <Loader loading={loading} />
    </div>
  );
}

const ShopTopRatedLoader = ({ loading }) => {
  return (
    <>
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
    </>
  );
};

export default ShopTopRatedLoader;
