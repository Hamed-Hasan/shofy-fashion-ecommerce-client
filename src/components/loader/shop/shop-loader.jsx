import React from "react";
import Loader from "../loader";

function SingleLoader({ loading, width }) {
  return (
    <div style={{ height: `${width}px` }}>
      <Loader loading={loading} />
    </div>
  );
}

function PrdItemLoader({ loading }) {
  return (
    <div className="col-xl-4 col-md-6 col-sm-6">
      <SingleLoader loading={loading} width="300" />
    </div>
  );
}

const ShopLoader = ({ loading, shopRight = false }) => {
  return (
    <section className="tp-shop-area">
      <div className="container">
        <div className="row">
          {!shopRight && (
            <div className="col-xl-3 col-lg-4">
              <SingleLoader loading={loading} width="80" />
              <SingleLoader loading={loading} width="100" />
              <SingleLoader loading={loading} width="220" />
              <SingleLoader loading={loading} width="180" />
              <SingleLoader loading={loading} width="180" />
              <SingleLoader loading={loading} width="180" />
            </div>
          )}
          <div className="col-xl-9 col-lg-8">
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
          </div>
          {shopRight && (
            <div className="col-xl-3 col-lg-4">
              <SingleLoader loading={loading} width="80" />
              <SingleLoader loading={loading} width="100" />
              <SingleLoader loading={loading} width="220" />
              <SingleLoader loading={loading} width="180" />
              <SingleLoader loading={loading} width="180" />
              <SingleLoader loading={loading} width="180" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShopLoader;
