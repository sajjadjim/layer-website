import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
const LawStats = () => {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    fetch("/LawStats.json")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-2">We Provide Best Law Services</h2>
      <p className="text-gray-600 mb-10">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow text-center"
          >
            <div className="text-4xl mb-4">{stat.icon}</div>
            <div className="text-3xl font-bold text-blue-600">
              <CountUp end={stat.value} duration={5} suffix="+" />
            </div>
            <p className="mt-2 text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LawStats;
