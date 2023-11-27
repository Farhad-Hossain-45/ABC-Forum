/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Tag = ({item}) => {
    const {tag,id} = item || {}
    console.log(tag)
    return (
        <div className='bg-sky-400 text-white rounded-2xl'>
         <a href="#">#{tag}</a>
        </div>
    );
};

export default Tag;