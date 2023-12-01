/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import moment from 'moment';
import Swal from 'sweetalert2';


const Comment = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    console.log(user)
    const addMoment = <p>{moment().format("DD/MM/YYYY hh:mm A")}</p>
    const addedTime = addMoment.props.children
    const handleComment = e =>{
        e.preventDefault()
        const comment = e.target.comment.value;
        const commentInfo = {
            comment: comment,
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            time: addedTime

        }

        axiosPublic.post('/comment', commentInfo)
        .then(res=>{
            console.log(res.data)
            e.target.reset();
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "successfully comment",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        
        
    }
   
    return (
        <div>
            <form onSubmit={handleComment}>
            <label className="form-control relative">
                <div className="label">
                    
                </div>
                <textarea name='comment' className="textarea textarea-bordered h-16" placeholder="type here..."></textarea>
                <div className="label">
                    
                <button className='btn absolute right-1 bottom-6 text-white bg-sky-400'>comment</button>
                </div>
            </label>
            </form>
        </div>
    );
};

export default Comment;