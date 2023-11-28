/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import { Link } from 'react-router-dom';
// import Tag from '../../AllTags/Tag/Tag';

const Post = ({item}) => {
    const {tag,id,authorName,authorImage,time,postTitle} = item || {}
    return (
        <Link to={`/post/${id}`}>
            <div className='border border-sky-400 w-[500px] h-[170px]'>
            <div className='flex justify-evenly w-2/3'>
            <div>
                <div  className='flex items-center gap-2'>
                    <div>
                        <img className='w-[50px] h-[40px] rounded-xl' src={authorImage} alt="" />
                    </div>
                    <div>
                        <h2 className='font-bold'>{authorName}</h2>
                        <h2>{time}</h2>
                    </div>
                </div>
                    <div>
                        <h2>{postTitle}</h2>
                    </div>
                    <h2>#{tag}</h2>
            </div>
            
               
            </div>
            <div className='flex justify-center gap-10 mt-3'>
                <div>
                    
                    <p className='bg-gray-400 border px-10 py-2 text-white rounded-xl'>Vote Count (0)</p>
                    
                </div>
                <div>
                    <p className='bg-gray-400 border px-10 py-2 text-white rounded-xl'>Comment Count (0)</p>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Post;