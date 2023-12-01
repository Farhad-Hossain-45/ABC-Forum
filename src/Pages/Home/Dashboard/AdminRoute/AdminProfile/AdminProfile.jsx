/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
// import useAxiosPublic from '../../../../../hooks/useAxiosPublic';

const AdminProfile = () => {
    const [admin,setAdmin] = useState([])
    const [filterAdmin, setFilterAdmin] = useState([])
    const [totalPost, setTotalPost] = useState([])
    const [comment, setComment] = useState([])
    // const axiosPublic = useAxiosPublic()

    // axiosPublic.get('/users')
    // .then(res=>{
    //     setAdmin(res.data)
    //     // console.log(admin)
    // })
    // console.log(admin)
    // const adminFilter = admin.filter(item => item.role === 'admin')
    // setFilterAdmin(adminFilter)
    // console.log(filterAdmin)
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>{
            setAdmin(data)
        })
    },[])
    // console.log(admin)
    useEffect(()=>{
        const adminFilter = admin.filter((item) => item.role === 'admin')
        setFilterAdmin(adminFilter)
    },[admin])
    // console.log(filterAdmin)
    useEffect(()=>{
        fetch('http://localhost:5000/post')
        .then(res=>res.json())
        .then(data=>{
            setTotalPost(data)
        })
    },[])
    useEffect(()=>{
        fetch('http://localhost:5000/comment')
        .then(res=>res.json())
        .then(data=>{
            setComment(data)
        })
    },[])

    // console.log(totalPost)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Admin Image</th>
                            <th>Admin Name</th>
                            <th>Email</th>
                            <th>Number of Posts</th>
                            <th>Number of Comments</th>
                            <th>number of Users</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            filterAdmin.map((item,index)=><tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.photo} />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                    
                                </td>
                                <td>{item.email}</td>
                                <td className='font-bold text-lg'>{totalPost.length}</td>
                                <td className='font-bold text-lg'>
                                    {comment.length}
                                </td>
                                <th className='font-bold text-lg'>
                                    {admin.length}
                                </th>
                            </tr>
                            )
                        }
                        
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default AdminProfile;