/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const AdminPrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    if(loading || isAdminLoading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user && isAdmin){
        return children
    }
    else{
        return <Navigate to="/dashboard/myProfile" state={{from: location}} replace></Navigate>
    }
};

export default AdminPrivetRoute;