import React from 'react';
import { Link } from 'react-router';

const Data = ({item}) => {
    // console.log(item)
    const {name,image,experience , expertise , licenseNumber} = item; 
    return (
<Link to={`/booking/${licenseNumber}`}>
        <div className=" bg-base-100  shadow-sm flex border-[1px] border-gray-200 px-2 py-3 rounded-xl mt-5">
  <div>
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  </div>
  <div className="items-center ">
    <div className='flex gap-5'>
        <button className='text-green-500 bg-green-200 rounded-full px-1 opacity-70  cursor-pointer'>
        Available</button>
            <button className='text-blue-500 bg-blue-200 rounded-full px-2 opacity-70 cursor-pointer'>{experience}+ years experience</button>
    </div>
    <h2 className="text-xl font-semibold my-2">{name}</h2>
    <div className='flex gap-5 my-1 opacity-55'>
        {
            expertise.map((expert , index)=> <p key={index}>{expert}</p>)
        }
    </div>
    
      <button className="w-full cursor-pointer mt-2 py-2 text-blue-500 border-blue-300 border-1 rounded-full">View Details</button>

  </div>
</div>
</Link>
    );
};

export default Data;


// {
//     "name": "Dr. Sofia Ahmed",
//     "licenseNumber": "LIC1003",
//     "layer": "Mid-Level",
//     "experience": 7,
//     "availableDay": [
//         "Monday",
//         "Thursday",
//         "Saturday"
//     ],
//     "consultationFee": 1300,
//     "expertise": [
//         "Pediatrics",
//         "General Medicine"
//     ],
//     "image": "https://randomuser.me/api/portraits/women/12.jpg"
// }