import React from "react";
import { Link } from "react-router";

const LayerDynamicError = () => {
  return (
    <div className="grid justify-center my-20 text-center">
      <h1 className="text-3xl font-bold my-5">No Layer Found Here !!!</h1>
      <p className="opacity-60">No Layer found in this License Number</p>
      <Link
        className="bg-blue-400 text-2xl mt-5 my-30 rounded-xl m-auto px-3 py-2 text-white"
        to="/"
      >
        View All Layer
      </Link>
    </div>
  );
};

export default LayerDynamicError;
