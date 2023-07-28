import React from "react";
import Loader from "../loader";

function SingleLoader({ loading }) {
  return (
    <div className="col-md-6 col-6" style={{ height: "50px" }}>
      <Loader loading={loading} />
    </div>
  );
}

const ShopBrandLoader = ({ loading }) => {
  return (
    <div className="row">
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
      <SingleLoader loading={loading} />
    </div>
  );
};

export default ShopBrandLoader;
