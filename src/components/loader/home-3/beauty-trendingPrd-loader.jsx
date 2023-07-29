import React from "react";
import Loader from "../loader";

function SingleLoader({ loading }) {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: "250px" }}>
      <Loader loading={loading} color="BD844C" />
    </div>
  );
}

const HomeThreeTrendingPrdLoader = ({ loading }) => {
  return <SingleLoader loading={loading} />;
};

export default HomeThreeTrendingPrdLoader;
