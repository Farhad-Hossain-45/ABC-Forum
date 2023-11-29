/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import { FaCommentAlt } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

const PostDetails = () => {
    const data = useLoaderData()
   
    const [count, setCount] = useState(0)
    const [downCount, setDownCount] = useState(0)

    const {_id, title, tag, description, name, email, photo, upVote, downVote,time} = data || {}
    // console.log(id)
    console.log(data)
   
    return (
        <div className='border border-sky-500  mb-6'>
            <div className='flex justify-center' >
                <img className='w-[100px] h-[70px] flex rounded-2xl mt-5' src={photo}alt="" />
            </div>
                <h2 className='text-2xl font-bold text-center mt-2'>{name}</h2>
                <div  className='flex justify-center gap-3'>
                    <div>
                        <h2>{time}</h2>
                    </div>
                    <div>
                        <h2 className='text-sky-400'>#{tag}</h2>
                        
                    </div>
                </div>
                <div>
                <h2 className='text-xl font-bold mt-3 text-center'>{title}</h2>
                <h2 className='mt-2 text-center'>{description}</h2>
                </div>
                <div className='flex justify-center mt-3 gap-3'>
                    <button onClick={()=>setCount(count + 1)} className='btn bg-sky-400 text-white'><BiSolidUpvote /> Up Vote {count} </button>
                    <button onClick={()=>setDownCount(downCount + 1)} className='btn bg-sky-400 text-white'><BiSolidDownvote /> Down Vote {downCount} </button>
                    <button className='btn bg-sky-400 text-white'><FaCommentAlt /> Comment </button>
                    <button className='btn bg-sky-400 text-white'><IoIosShareAlt /> Share </button>
                </div>
        </div>
    );
};

export default PostDetails;