/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Extra = ({ item }) => {
    const { photo,name,email,details,title } = item || {}
    return (
        <div className='mb-10'>
            <div className="card w-96 h-[300px] bg-base-100 shadow-xl">
                <div className='flex items-center gap-4'>
                    <div>
                        <img className='w-[100px] h-[80px] rounded-full' src={photo} alt="" />
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold'>{name}</h2>
                        <h2>{email}</h2>
                    </div>
                </div>
                <div>
                    <h2 className='text-lg font-bold my-3'>{title}</h2>
                    <h2>{details}</h2>
                </div>
            </div>
        </div>
    );
};

export default Extra;