/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../components/AuthProvider/AuthProvider';

const MyProfile = () => {
    const {user} = useContext(AuthContext)
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)
        })
    },[])
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
            {/* {
                users.map(item=> <div key={item._id}>
                    <div>
                        <h2>Reward : {item.reward}</h2>
                    </div>
                </div>)
            } */}
        </div>
    );
};

export default MyProfile;