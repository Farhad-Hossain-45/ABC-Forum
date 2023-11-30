/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const isAdmin = true;
    // const [isAdmin] = useAdmin()
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex">
                <div className="w-64 min-h-screen bg-sky-500">
                    <ul className="menu p-4">
                        
                        
                           
                           
                        {
                            isAdmin ? <>
                            <li><NavLink to="/dashboard/adminProfile">Admin Profile</NavLink></li>
                            <li><NavLink to="/dashboard/manageUsers">Manage Users</NavLink></li>
                            <li><NavLink to="/dashboard/activities">Activities</NavLink></li>
                            <li><NavLink to="/dashboard/announcement">Announcement</NavLink></li>
                            </>:
                            
                            <><li><NavLink to="/dashboard/myProfile"> My Profile</NavLink></li><li><NavLink to="/dashboard/addPost">Add Post</NavLink></li><li><NavLink to="/dashboard/myPost">My Posts</NavLink></li></>
                        }

                        
                        
                           
                        
                        <div className="divider"></div>
                        <li ><NavLink to="/">Home</NavLink></li>
                        
                    </ul>
                </div>
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;