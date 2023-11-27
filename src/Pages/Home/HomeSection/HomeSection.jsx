/* eslint-disable no-unused-vars */
import React from 'react';
import AllPost from '../AllPost/AllPost';
import AllTags from '../AllTags/AllTags';

const HomeSection = () => {
    return (
        <div>
            <div className='flex justify-evenly'>
                <div className=' w-2/3'>
            <h2 className='text-center font-bold text-2xl mb-4'>ALL POST</h2>
                    <AllPost></AllPost>
                </div>
                <div className='w-1/3'>
                <h2 className='text-center font-bold text-2xl mb-4 mr-20'>ALL TAGS</h2>
                    <AllTags></AllTags>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;