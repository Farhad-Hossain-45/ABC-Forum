/* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
import  './Banner.css'

const Banner = () => {
    // const [data,setData] = useState([])
    // const [valueData, setValueData] =useState([])
    // const value = data.tag
    // useEffect(()=>{
    //     fetch('http://localhost:5000/post')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setData(data)
    //     })
    // },[])
   
    // const handleSearch =(e)=>{
    //     e.preventDefault()
    //     const form = e.target
    //     const name = form.name.value;
    //    const filterData = data.filter(item=> item.tag === name)
    //    setValueData(filterData)

    // }
    return (
        <div>
        <div id='banner-bg' className='h-[450px] mb-12 relative'>
            
        </div>
        <div className='absolute lg:bottom-56 lg:left-96 md:bottom-1 md:left-20 bottom-1'>
            <h1 className='md:text-4xl text-xl font-black mb-10 ml-8 md:ml-0'>Discover stories, thinking, and expertise<br /> from writers on any topic.</h1>
           <form>
           <input type="text" name="name" id="" placeholder='Search here....'  className='bg-white py-1.5 px-10 rounded-s-lg border-x-4 border-y-4 md:ml-32 ml-8'/>
            <button type='submit' className='bg-[#FF444A] text-white px-3 py-2 rounded-e-lg'>Search</button>
           </form>
        </div>
    </div>
    );
};

export default Banner;