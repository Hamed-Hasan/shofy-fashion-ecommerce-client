import React from "react";
import Loader from "../loader";

function PrdItemLoader({ loading }) {
  return (
    <div
      className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
      style={{ height: "350px" }}
    >
      <Loader loading={loading} />
    </div>
  );
}

const ShopHiddenLoader = ({ loading }) => {
  return (
    <div className="row">
      <PrdItemLoader loading={loading} />
      <PrdItemLoader loading={loading} />
      <PrdItemLoader loading={loading} />
      <PrdItemLoader loading={loading} />
      <PrdItemLoader loading={loading} />
      <PrdItemLoader loading={loading} />
      <PrdItemLoader loading={loading} />
      <PrdItemLoader loading={loading} />
      <PrdItemLoader loading={loading} />
      <PrdItemLoader loading={loading} />
      <PrdItemLoader loading={loading} />
      <PrdItemLoader loading={loading} />
    </div>
  );
};

export default ShopHiddenLoader;
