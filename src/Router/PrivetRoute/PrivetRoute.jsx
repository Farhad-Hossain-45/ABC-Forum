/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';



const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user){
        return children
    }
    else{
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
   
};

export default PrivetRoute;