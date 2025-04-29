import React from 'react';
import { useLoaderData } from 'react-router';

const Blogs = () => {
    const data = useLoaderData()
    return (
        <div>
            <h1 className='text-center  text-3xl font-semibold my-6'>My Blogs</h1>
            {
                data.map((info,index) => <div key={index} tabIndex={0} className="collapse bg-yellow-100 p-5 m-5">
                <div className="collapse-title font-semibold">{index+1}. {info.question}</div>
                <div className="collapse-content text-sm">
                <span className='font-bold'>Answer :</span> {info.answer}
                </div>
              </div>)
            }
        </div>
    );
};

export default Blogs;