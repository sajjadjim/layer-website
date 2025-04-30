import React from "react";
import { useLoaderData, useParams } from "react-router";
import { CiCircleAlert } from "react-icons/ci";
import {
  addStoredCart,
  getItems,
} from "../../../LocalStoreData/addLocalStoreData";
import { ToastContainer, toast } from "react-toastify";
const LayerDetails = () => {
  const { id } = useParams();
  console.log(id);
  const data = useLoaderData();
  console.log(data);
  const singleLayer = data.find((layer) => layer.licenseNumber === id);
  const {
    name,
    image,
    experience,
    expertise,
    licenseNumber,
    availableDay,
    consultationFee,
  } = singleLayer;

  const handleLayerAppointment = (id) => {
    const storedLocalAppointment = getItems();
    const isLocalAppointmentStore = storedLocalAppointment.includes(id);
    if (isLocalAppointmentStore) {
      toast("Already fixed appointment ⚠️");
    } else {
      addStoredCart(id);
      toast("Successfully add appointment ✅");
    }
  };

  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="bg-[#0F0F0F26] rounded-xl p-10 text-center mt-10">
        <h1 className="text-4xl font-semibold my-2">
          Lawyer’s Profile Details
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>
      <div>
        <div className="flex my-5 bg-base-100 w-auto  shadow-sm py-10">
          <figure className="px-10 pt-10">
            <img src={image} alt="layer" className="rounded-xl shadow-xl/30 " />
          </figure>
          <div className=" items-center ">
            <button className="text-blue-500 bg-blue-200 rounded-full px-2 py-1">
              {experience}+ years experience
            </button>
            <h2 className="text-2xl font-semibold my-3">Name :{name}</h2>
            <div className="flex gap-5 my-1 opacity-55">
              {expertise.map((expert, index) => (
                <p key={index}>{expert}</p>
              ))}
              <p> © License no:{licenseNumber}</p>
            </div>
            <div className="flex gap-5 my-1 opacity-55 my-3">
              Availability :{" "}
              {availableDay.map((day, index) => (
                <p key={index}>
                  <span className="text-yellow-800 bg-yellow-200 rounded-full px-2 py-1">
                    {day}
                  </span>
                </p>
              ))}
            </div>
            <div className="card-actions">
              <p>Consultation Fee: {consultationFee}$</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-auto border-1 border-[#14141426] rounded-xl p-5 my-10">
        <div className=" text-center">
          <h2 className="text-[22px] font-semibold">Book an Appointment</h2>
          <div className="flex justify-between">
            <p className="font-bold">Availability</p>
            <p className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
              Lawyer Available Today
            </p>
          </div>
          <div>
            <p className="bg-orange-200 w-4/5 text-center m-auto mt-10 rounded-xl text-orange-700">
              Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding and
              cooperation.
            </p>
          </div>
          <div className="">
            <button
              onClick={() => handleLayerAppointment(id)}
              className="w-full bg-green-600 text-white rounded-full py-1 mt-10 cursor-pointer"
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayerDetails;
