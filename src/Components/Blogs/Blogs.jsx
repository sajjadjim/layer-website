import React, { use } from "react";
import { CiCalendarDate } from "react-icons/ci";
const Blogs = ({ userPromiseBlogsData }) => {
  const data = use(userPromiseBlogsData);
  return (
    <div>
      <h1 className="text-center  text-3xl font-semibold my-6">My Blogs</h1>
      {data.map((info, index) => (
        <div
          key={index}
          tabIndex={0}
          className="collapse bg-yellow-100 p-5 m-5"
        >
          <div className="collapse-title font-semibold">
            {index + 1}. {info.question}
          </div>
          <div className="collapse-content text-sm">
            <span className="font-bold">Answer :</span> {info.answer}
            <br></br>
            <span className="py-2 font-semibold flex items-center gap-1">
              <CiCalendarDate /> Date :{info.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
