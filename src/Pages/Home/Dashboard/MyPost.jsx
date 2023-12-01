/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../components/AuthProvider/AuthProvider';
import { FaComment } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";

const MyPost = () => {
    const [data, setData] = useState([])
    const { user } = useContext(AuthContext)
    console.log(user)

    useEffect(() => {

        fetch(`http://localhost:5000/post?email=${user?.email}`)

            .then(res => res.json())
            .then(data => {
                setData(data)
            })


    }, [user, user?.email])
    console.log(data)
    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold text-center mt-8'>My Post</h2>
               
            </div>
                {
                    user?.email ? <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Post Title</th>
                                <th>Number Of Vote</th>
                                <th>Comment Button</th>
                                <th>Action</th>
    
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item,index)=> <tr key={item._id}>
                                    <th>{index+1}</th>
                                    <td>{item.title}</td>
                                    <td>1</td>
                                    <td>
                                        <button className='btn bg-sky-400 text-xl text-white'>
                                            <FaComment></FaComment>
                                        </button>
                                    </td>
                                    <td>
                                        <button className='btn bg-red-400 text-white text-xl'>
                                        <MdDelete />
                                        </button>
                                    </td>
                                </tr>)
                            }
                           
                           
                            
                        </tbody>
                    </table>
                </div> : <p className='text-2xl font-semibold text-center mt-10'>Not Posted</p>
                }
            

           
        </div>
    );
};

export default MyPost;