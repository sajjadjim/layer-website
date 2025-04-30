import React from "react";
import { Link } from "react-router";

const Contact = () => {
  return (
    <div className="grid justify-center">
      <div className="text-center">
        <img
          className="shadow-xl/30  my-5 w-100 h-100 border-1 rounded-xl border-[#14141426]"
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"
          alt="404 no found"
        />
        <h1 className="my-3 font-bold text-3xl">404 Page Not Found</h1>
        <p className="text-xl my-3">
          oops!! the page you look doesn't exists Here.
        </p>
      </div>
      <Link
        className="bg-green-400 text-2xl mt-5 my-30 rounded-3xl m-auto px-3 py-2 text-white"
        to="/"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Contact;
