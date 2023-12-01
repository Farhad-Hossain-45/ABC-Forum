/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../../../../hooks/useAxiosPublic';
import { FaUsers } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
const ManageUsers = () => {
    // const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { data: user = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    const handleMakeAdmin = (user)=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res=>{
        console.log(res.data)
        
        if(res.data.modifiedCount > 0){
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} you an admin now!`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
        
    }
    const handleDeleteUser = (id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
            axiosSecure.delete(`/users/${id}`)
            .then(res=> {
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            })
            }
          });
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Make Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            user.map((item, index) => <tr key={item._id}>
                                <th>{index + 1 }</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    {
                                        item.role === 'admin' ? "Admin" : <button onClick={()=>handleMakeAdmin(item)} className="btn btn-ghost text-xl bg-sky-300 text-white"><FaUsers /></button>
                                    }
                                    </td>
                                     <td>
                                     <button onClick={()=>handleDeleteUser(item._id)} className="btn btn-ghost text-xl bg-[#B91C1C] text-white"><MdDelete /></button>
                                     </td>
                            </tr>)
                        }
                        
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;