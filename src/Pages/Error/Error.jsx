/* eslint-disable no-unused-vars */
import React from 'react';
import image_error from '../../assets/not_found.png'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className='flex justify-center mt-10 '>
            <img className='w-[400px] h-[300px]' src={image_error} alt="" />
        </div>
            <div className='flex justify-center'>
            <Link to="/"> <button className='btn bg-sky-400 rounded-lg text-white mt-4'>Go To Home</button></Link>
            </div>
        </div>
    );
};

export default Error;