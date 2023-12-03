/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo/Logo';

import { MdOutlineNotificationsActive } from 'react-icons/md';
import { AuthContext } from '../../../components/AuthProvider/AuthProvider';


const Navbar = () => {
    const [announcement, setAnnouncement] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/announcement')
        .then(res=>res.json())
        .then(data=>{
            setAnnouncement(data)
        })
    },[])
    const [toggle,setToggle] = useState(false)
    const { user,singOut } = useContext(AuthContext);
    const handleLogout = ()=>{
        singOut()
        .then()
        .catch()
    }
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/membership">Membership</NavLink></li>
        <li><Link><MdOutlineNotificationsActive className='text-2xl' /> <div className="badge badge-secondary">{announcement.length}</div></Link> </li>
        <li><NavLink to="/login">Login</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Logo></Logo>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                                user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL}  onClick= {()=>setToggle(!toggle)}/>
                                </div>
                            </label>
    
                            }
                                
                    {
                        toggle ? <div className='absolute top-16 z-[10]'>
                           {
                            user &&  <div className='shadow-xl bg-white w-52 h-40'>
                            <h2 className='font-semibold text-xl text-center'>{user && user.displayName}</h2>
                            <Link onClick= {()=>setToggle(!toggle)} to='/dashboard/myProfile'>
                                <h2 className='btn btn-ghost flex justify-center mt-2  '>DASHBOARD</h2>
                            </Link>
                            <Link to='/login'>
                                <h2 onClick={handleLogout} className='btn btn-ghost flex justify-center mt-2 '>LOGOUT</h2>
                            </Link>
                            
                        </div>
                           }
                            
                        </div>
                        
                     : ''
                    }
                    
                    {/* {
                        user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL}  onClick={handleProfile} />
                            </div>
                        </label>

                    } */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;