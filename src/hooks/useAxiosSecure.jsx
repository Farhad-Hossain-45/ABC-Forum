/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import axios from 'axios';


const axiosSecure =   axios.create({
    baseURL:('http://localhost:5000')
    
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {singOut} = useContext(AuthContext)
    axiosSecure.interceptors.request.use(function (config){
        return config
    })
    axiosSecure.interceptors.response.use(function (response){
        return response;
        
    },  async(error)=>{
        const status = error.response.status
        console.log('error interceptors', status)
        if(status === 401 || status === 403){
            await singOut()
            navigate('/login')
        }
        return Promise.reject(error)
    })

    return axiosSecure;
   

};

export default useAxiosSecure;