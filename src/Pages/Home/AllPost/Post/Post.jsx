/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import AllTags from '../../AllTags/AllTags';
// import Tag from '../../AllTags/Tag/Tag';

const Post = ({item}) => {
    const {tag,id,authorName,authorImage,time,postTitle} = item || {}
    return (
        <div className='border border-sky-400 w-[500px] h-[150px]'>
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
        </div>
    );
};

export default Post;