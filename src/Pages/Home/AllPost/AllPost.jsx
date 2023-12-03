/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Post from './Post/Post';

const AllPost = () => {
    const [allPost, setAllPost] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/post')
        .then(res=>res.json())
        .then(data=>{
            setAllPost(data)
        })
    },[])

    const handlePopularPost = ()=>{
        const sortedPosts = [...allPost].sort((a, b) => b.upVote - a.upVote);
        setAllPost(sortedPosts);
    }
    return (
        <div>
            <button onClick={handlePopularPost} className='btn bg-sky-400 mb-3 text-white'>Popular Post</button>
            <div className='grid grid-cols-1 gap-5'>
            
            {
                allPost.map(item=> <Post key={item.id} item={item}></Post>)
            }
        </div>
        </div>
    );
};

export default AllPost;