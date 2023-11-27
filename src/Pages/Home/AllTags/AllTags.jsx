/* eslint-disable no-unused-vars */
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Tag from './Tag/Tag';

const AllTags = () => {
    const [tags,setTags] = useState([])
    useEffect(()=>{
        fetch('/data.json')
        .then(res=> res.json())
        .then(data=>{
            setTags(data)
        })
    },[])
    
    return (
        <div className='grid grid-cols-2 gap-5'>
           {
                tags.map(item => <Tag key={item.id} item={item}></Tag>)
           }
        </div>
    );
};

export default AllTags;