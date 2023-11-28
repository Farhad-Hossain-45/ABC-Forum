/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Post from './Post/Post';

const AllPost = () => {
    const [AllPost, setAllPost] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/post')
        .then(res=>res.json())
        .then(data=>{
            setAllPost(data)
        })
    },[])
    return (
        <div>
            
            <div className='grid grid-cols-1 gap-5'>
            
            {
                AllPost.map(item=> <Post key={item.id} item={item}></Post>)
            }
        </div>
        </div>
    );
};

export default AllPost;