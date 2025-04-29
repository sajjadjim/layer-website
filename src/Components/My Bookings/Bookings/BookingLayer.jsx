import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getItems, removeCart } from '../../../LocalStoreData/addLocalStoreData';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router';
const BookingLayer = () => {
    const [layerListAppointment, setLayerListAppointment] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const getLayerAppointmentList = getItems();
        const layerAppointmentList = data.filter(layer =>
            getLayerAppointmentList.includes(layer.licenseNumber)
        );
        setLayerListAppointment(layerAppointmentList);
    }, [data]);

    const handleLayerRemoveAppointment = (id) => {
        const updatedAppointments = layerListAppointment.filter(layer => layer.licenseNumber !== id);
        setLayerListAppointment(updatedAppointments);
        removeCart(id);
        toast("Appointment cancel successfully ❌");
    };
    return (
        <div>
            <ToastContainer></ToastContainer>
            <div>Graph Part Here</div>

            <div>
                <h1 className='text-center text-3xl font-semibold my-5'>My Today Appointments</h1>
                <p className='text-center opacity-70 mb-3'>
                    Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
                </p>

                {layerListAppointment.length === 0 ? (
                    <div className='mb-50'>
                        <p className='text-center text-xl text-gray-500 mt-20 mb-20'>No appointments available</p>
                        <div className='flex  justify-center'>
                        <Link to='/' className='bg-blue-500 rounded-xl py-2 px-3 text-white font-semibold'>Book an Appointment </Link>
                        </div>
                    </div>
                    
                ) : (
                    <div>
                        {layerListAppointment.map((layer, index) => (
                            <div
                                className='py-6 border border-[#14141426] rounded-xl mb-5 px-3'
                                key={index}
                            >
                                <div className='flex justify-between'>
                                    <div className='py-3'>
                                        <p className='font-semibold'>Name: {layer.name}</p>
                                        <div className='flex gap-3 opacity-50'>
                                            {layer.expertise.map((expert, idx) => (
                                                <p key={idx}>{expert}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='text-[#14141499]'>
                                        Appointment Fee: {layer.consultationFee}$
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleLayerRemoveAppointment(layer.licenseNumber)}
                                    className='w-full border rounded-full py-1 text-red-600 cursor-pointer hover:bg-red-600 hover:text-white mt-3'
                                >
                                    Cancel Appointment
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingLayer;
