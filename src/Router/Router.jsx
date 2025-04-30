import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home Page/Home/Home";
import Blogs from "../Components/Blogs/Blogs";

import ErrorPage from "../Error/ErrorPage";

import Contact from "../Components/Contact/Contact";
import BookingLayer from "../Components/My Bookings/Bookings/BookingLayer";
import LayerDetails from "../Components/Home Page/SingleLayerDetails/LayerDetails";
import LayerDynamicError from "../Error/LayerDynamicError";
const userPromiseData = fetch("/LayerData.json").then((res) => res.json());
const userPromiseBlogsData = fetch("/Blogs.json").then((res) => res.json());
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        element: (
          <Suspense
            fallback={
              <div className="text-center my-20">
                <span className="loading loading-spinner text-info"></span>
                <span className="loading loading-spinner text-success mx-5"></span>
                <span className="loading loading-spinner text-warning"></span>
              </div>
            }
          >
            <Home userPromiseData={userPromiseData}> </Home>
          </Suspense>
        ),
      },
      {
        path: "blogs",
        element: (
          <Suspense
            fallback={
              <div className="text-center my-20">
                <span className="loading loading-spinner text-info"></span>
                <span className="loading loading-spinner text-success mx-5"></span>
                <span className="loading loading-spinner text-warning"></span>
              </div>
            }
          >
            <Blogs userPromiseBlogsData={userPromiseBlogsData}> </Blogs>
          </Suspense>
        ),
      },
      {
        path: "/booking/:id",
        loader: () => fetch("/LayerData.json").then((res) => res.json()),
        Component: LayerDetails,
        errorElement: <LayerDynamicError></LayerDynamicError>,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/bookingLayer",
        loader: () => fetch("/LayerData.json").then((res) => res.json()),
        Component: BookingLayer,
      },
    ],
  },
]);
