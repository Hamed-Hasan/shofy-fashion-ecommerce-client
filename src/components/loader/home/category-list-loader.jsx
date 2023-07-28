import React from "react";
import Loader from "../loader";

function SingleLoader({ loading }) {
  return (
    <div style={{ height: "25px" }}>
      <Loader loading={loading} />
    </div>
  );
}

const CategoryListLoader = ({ loading }) => {
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

export default CategoryListLoader;
