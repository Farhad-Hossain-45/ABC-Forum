/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import { Link } from 'react-router-dom';
// import Tag from '../../AllTags/Tag/Tag';

const Post = ({item}) => {
    const {tag,_id, title,name,email,photo,time} = item || {}
    return (
        <div className='border w-[500px] h-[170px] shadow-xl'>
                <Link to={`/post/${_id}`}>
            <div className='flex justify-evenly w-2/3'>
            <div>
                <div  className='flex items-center gap-2'>
                    <div>
                        <img className='w-[50px] h-[40px] rounded-xl' src={photo} alt="" />
                    </div>
                    <div>
                        <h2 className='font-bold'>{name}</h2>
                        <h2>{time}</h2>
                    </div>
                </div>
                    <div>
                        <h2>{title}</h2>
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
        </Link>
        </div>
    );
};

export default Post;