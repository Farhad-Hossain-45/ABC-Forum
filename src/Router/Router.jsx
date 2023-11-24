/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Membership from '../Pages/Membership/Membership';
import Notification from '../Pages/Home/Navbar/Notification/Notification';


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/membership',
                element: <Membership></Membership>
            },
            {
                path: '/notification',
                element: <Notification></Notification>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])


export default Router;