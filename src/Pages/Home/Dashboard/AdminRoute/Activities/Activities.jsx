/* eslint-disable no-unused-vars */
import React from 'react';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Activities = () => {
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/comment')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setData(data)
    //     })
    // },[])
    const axiosSecure = useAxiosSecure()
    const { data: user = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/comment')
            return res.data
        }
    })
    const handleDelete = (id)=>{
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
           
            axiosSecure.delete(`/comment/${id}`)
            .then(res=> {
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your user is removed",
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
                            <th>Name</th>
                            <th>Title</th>
                            <th>Comment</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((item,index)=> <tr key={item._id}>
                                <th>{index+1}</th>
                                <td>{item.name}</td>
                                <td>{item.title}</td>
                                <td>{item.comment}</td>
                                <td>
                                    <button onClick={()=>handleDelete(item._id)} className='btn bg-red-400 text-white font-2xl'><MdDelete /></button>
                                </td>
                            </tr>)
                        }
                        
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Activities;