/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import { FaCommentAlt, FaFacebook, FaFacebookMessenger, FaTwitter } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import {
    FacebookShareButton,
    TwitterShareButton,
    FacebookMessengerShareButton
  } from "react-share";
import Comment from './Comment/Comment';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const PostDetails = () => {
    const data = useLoaderData()
    const { _id, title, tag, description, name, email, photo, upVote, downVote, time } = data || {}
    const [upVoteCount, setUpVoteCount] = useState(upVote)
    const [downVoteCount, setDownVoteCount] = useState(downVote)
    const [voted,setVoted] = useState(null)
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    // const [count, setCount] = useState(0)
    // const [downCount, setDownCount] = useState(0)
    // const handleUpVote=() =>{
    //     if(upVoteCount === 0){
    //         setUpVoteCount(1)
    //     }
    //     else{
    //         setUpVoteCount(0)
    //     }
    // }
    const handleUpVote = async()=>{
        if(voted !== "up" && user){
            setUpVoteCount(upVoteCount +1)
            setDownVoteCount(downVoteCount)
            setVoted("up")
            const upVoteInfo={
                upVote: upVoteCount +1

            }
            const updatedVote = await axiosPublic.patch(`/post/upvote/${_id}`, upVoteInfo)
            console.log(updatedVote)
        }else if( voted === "up"){
            setUpVoteCount(upVoteCount - 1);
            setVoted(null)
        }
        else{
            Swal.fire({
                title: "Sorry",
                text: "You need to login first",
                icon: "error"
            })
        }
    }
    const handleDownVote = async()=>{
        if(voted !== "down" && user){
            setDownVoteCount(downVoteCount +1)
            setUpVoteCount(upVoteCount)
            setVoted("down")
            const downVoteInfo={
                upVote: downVoteCount +1

            }
            const updatedVote = await axiosPublic.patch(`/post/upvote/${_id}`, downVoteInfo)
            console.log(updatedVote)
        }else if( voted === "down"){
            setDownVoteCount(downVoteCount - 1);
            setVoted(null)
        }
    }

   
    // console.log(id)
    console.log(data)


    return (
        <div>
            <div className='border border-sky-500  mb-6'>
            <div className='flex justify-center' >
                <img className='w-[100px] h-[70px] flex rounded-2xl mt-5' src={photo} alt="" />
            </div>
            <h2 className='text-2xl font-bold text-center mt-2'>{name}</h2>
            <div className='flex justify-center gap-3'>
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
                <button onClick={handleUpVote} className='btn bg-sky-400 text-white' disabled={voted === "down"}><BiSolidUpvote /> Up Vote {upVoteCount} </button>
                <button  onClick={handleDownVote} className='btn bg-sky-400 text-white' disabled={voted === "up"}><BiSolidDownvote /> Down Vote {downVoteCount} </button>
                <button className='btn bg-sky-400 text-white' ><FaCommentAlt  /> Comment </button>
                {/* <button className='btn bg-sky-400 text-white'><IoIosShareAlt /> Share </button> */}
                {/* The button to open modal */}
                <label htmlFor="my_modal_7" className="btn bg-sky-400 text-white"> <IoIosShareAlt /> Share</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box h-36 w-80">
                        <FacebookShareButton url='facebook.com'>
                           <FaFacebook className='text-4xl'></FaFacebook>
                        </FacebookShareButton>
                        <FacebookMessengerShareButton url='messenger.com'>
                            <FaFacebookMessenger className='text-4xl ml-5'></FaFacebookMessenger>
                        </FacebookMessengerShareButton>
                        <TwitterShareButton url='twitter.com'>
                            <FaTwitter className='text-4xl ml-5'></FaTwitter>
                        </TwitterShareButton>

                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                    
                </div>
            </div>
            
        </div>
        <Comment title={title}></Comment>
        </div>
    );
};

export default PostDetails;