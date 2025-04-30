import React, { use, useState } from "react";
import HomeBanner from "../Banner Page/HomeBanner";
import Data from "../LayerData/Layer";
import LawStats from "./HomeCountUp";

const Home = ({ userPromiseData }) => {
  const data = use(userPromiseData);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount(data.length);
  };

  return (
    <div>
      <HomeBanner />
      <div className="grid items-center justify-center text-center mt-10">
        <h1 className="text-4xl font-semibold">Our Best Lawyers</h1>
        <p className="my-3 opacity-60">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-6 max-w-5xl mx-auto">
        {data.slice(0, visibleCount).map((item) => (
          <Data key={item.licenseNumber} item={item} />
        ))}
      </div>
      {visibleCount < data.length && (
        <div className="flex justify-center my-6">
          <button
            onClick={handleShowMore}
            className="btn px-6 py-2 bg-green-800 text-white rounded-full hover:bg-blue-700 transition"
          >
            Show All Layer
          </button>
        </div>
      )}
      <div>
        <LawStats></LawStats>
      </div>
    </div>
  );
};

export default Home;
