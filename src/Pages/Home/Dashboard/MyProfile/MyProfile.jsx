/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../components/AuthProvider/AuthProvider';
import image from '../../../../assets/bronnze_image-removebg-preview.png'

const MyProfile = () => {
    const {user} = useContext(AuthContext)
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch(`https://final-assignment-server-sage.vercel.app/users?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)
        })
    },[user?.email])
    return (
        <div>
            <div className='flex justify-center'>
                <img className='w-[250px] h-[200px]' src={user?.photoURL} alt="" />
            </div>
            <div className='flex justify-center gap-10 mt-8'>
                <div>
                    <h2 className='text-xl font-semibold'>Name: {user?.displayName}</h2>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Email: {user?.email}</h2>
                </div>
            </div>
            {
                users.map(item=> <div key={item._id}>
                    <div className='flex items-center justify-center'>
                        <h2 className='text-center text-xl font-semibold mt-6'>Reward : {item.reward}</h2>
                        <img className='h-[50px] w-[50px] mt-4' src={image} alt="" />
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyProfile;