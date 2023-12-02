/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Extra from './Extra';

const ExtraSection = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/announcement')
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])
    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-10'>Announcement</h1>
          <div className='grid grid-cols-3 gap-5'>
            {
                data.map(item=> <Extra key={item._id} item={item}></Extra>)
            }
          </div>
        </div>
    );
};

export default ExtraSection;