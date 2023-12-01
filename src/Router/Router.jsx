/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Membership from '../Pages/Membership/Membership';
import Notification from '../Pages/Home/Navbar/Notification/Notification';
import Dashboard from '../Pages/Home/Dashboard/Dashboard';
import MyProfile from '../Pages/Home/Dashboard/MyProfile/MyProfile';
import AddPost from '../Pages/Home/Dashboard/AddPost';
import MyPost from '../Pages/Home/Dashboard/MyPost';
import PostDetails from '../components/PostDetails/PostDetails';
import AdminProfile from '../Pages/Home/Dashboard/AdminRoute/AdminProfile/AdminProfile';
import ManageUsers from '../Pages/Home/Dashboard/AdminRoute/ManageUsers/ManageUsers';
import Activities from '../Pages/Home/Dashboard/AdminRoute/Activities/Activities';
import Announcement from '../Pages/Home/Dashboard/AdminRoute/Announcement/Announcement';
import Error from '../Pages/Error/Error';



const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
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
            },
            {
                path: '/post/:id',
                element: <PostDetails></PostDetails>,
                loader: ({params}) =>fetch(`http://localhost:5000/post/${params.id}`)
            }
        ]
    },
    
        {
            path: 'dashboard',
            element: <Dashboard></Dashboard>,
            children:[
                {
                    path: 'myProfile',
                    element: <MyProfile></MyProfile>
                },
                {
                    path: 'addPost',
                    element: <AddPost></AddPost>
                },
                {
                    path: 'myPost',
                    element: <MyPost></MyPost>
                },
                // admin router

                {
                    path: 'adminProfile',
                    element: <AdminProfile></AdminProfile>
                },
                {
                    path: 'manageUsers',
                    element: <ManageUsers></ManageUsers>
                },
                {
                    path: 'activities',
                    element: <Activities></Activities>
                },
                {
                    path: 'announcement',
                    element: <Announcement></Announcement>
                }
            ]
        }
    
])


export default Router;