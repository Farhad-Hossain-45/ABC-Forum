/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { Link, useLoaderData } from 'react-router-dom';
// import Tag from '../../AllTags/Tag/Tag';

const Post = ({item}) => {
    const {tag,_id, title,name,email,photo,time,upVote} = item || {}
    const [commentCount, setCommentCount] = useState([])
    
    const [filterCount, setFilterCount] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/comment')
        .then(res=>res.json())
        .then(data=>{
            setCommentCount(data)
        })
    },[])
    useEffect(()=>{
        const filterValue = commentCount.filter(item=> item.title === title)
        setFilterCount(filterValue)
    },[commentCount, title])
    
    console.log(filterCount)
    

    
    
    return (
        <div>
            
            <div className='border w-[500px] h-[170px] shadow-xl'>
                <Link to={`/post/${_id}`}>
            <div className='flex justify-evenly w-2/3'>
            <div>
                <div  className='flex items-center gap-2'>
                    <div>
                        <img className='w-[50px] h-[40px] rounded-xl' src={photo} alt="" />
                    </div>
                    <div>
                        <h2 className='font-bold text-xl'>{name}</h2>
                        <h2>{time}</h2>
                    </div>
                </div>
                    <div>
                        <h2 className='font-semibold text-lg'>{title}</h2>
                    </div>
                    <h2>#{tag}</h2>
            </div>
            
               
            </div>
            <div className='flex justify-center gap-10 mt-3'>
                <div>
                    <p className='bg-gray-400 border px-10 py-2 text-white rounded-xl'>Vote Count ({upVote})</p>
                    
                </div>
                <div>
                    <p className='bg-gray-400 border px-10 py-2 text-white rounded-xl'>Comment Count ({filterCount.length})</p>
                </div>
            </div>
        </Link>
        </div>
        </div>
    );
};

export default Post;