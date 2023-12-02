/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../../../../components/AuthProvider/AuthProvider';
import useAxiosPublic from '../../../../../hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const Announcement =  () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext)
    // const imageFile = {image: data.photo[0]}
    // const res =  await axiosPublic.post(image_hosting_api, imageFile, {
    //     headers: {
    //         'content-type': 'multipart/form-data'
    //     }
        
    // })
    // const handleAnnouncement = e =>{
    //     e.preventDefault()
    //     const imageFile = {image: e.target.photo[0]}
    // const res =   axiosPublic.post(image_hosting_api, imageFile, {
    //     headers: {
    //         'content-type': 'multipart/form-data'
    //     }
        
    // })
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const title= form.title.value;
    //     const details = form.details.value;
    //     const newValue = {name, email,title,details}
    //      console.log(newValue)
    // }
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        console.log(data)
        const imageFile = {image: data.photo[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
            
        })
        console.log(res.data.data.display_url)

        const photo = res.data.data.display_url
        const name = data.name
        const email = data.email
        const title = data.title
        const details = data.details
        const userInfo = {
            name,email,title,photo,details
        }
        console.log(userInfo)
        axiosPublic.post('/announcement', userInfo)
        .then(res=>{
            console.log(res.data)
            if (res.data.insertedId) {

                Swal.fire('announcement added successfully');
                
              }
        })
      }
    
    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
           <div>
            <h2 className='text-2xl font-bold my-8 text-center underline'>Make Announcement!!!</h2>

            <div className="flex gap-3">
                <div className="form-control w-full mb-5">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input {...register("name", { required: true })}  type="text" defaultValue={user?.displayName}  className="input input-bordered w-full"  />
                    {errors.name && <span className="mt-2 text-red-600">Name is required </span>}

                </div>
                <div className="form-control w-full mb-5">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input {...register("email", { required: true })} type="text" defaultValue={user?.email}  className="input input-bordered w-full" />
                    {errors.email && <span className="mt-2 text-red-600">Email is required </span>}

                </div>
            </div>
            <div className="form-control w-full mb-5">
                <label className="label">
                    <span className="label-text">Title</span>
                </label>
                <input {...register("title", { required: true })} type="text" placeholder='Title here' className="input input-bordered w-full" />
                {errors.title && <span className="mt-2 text-red-600">Email is required </span>}

            </div>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Details</span>
                    
                </div>
                <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>
                {errors.details && <span className="mt-2 text-red-600">Email is required </span>}
               
            </label>
            <input type="file" {...register("photo", { required: true })} className="file-input w-full max-w-xs mt-4" />
            {errors.photo && <span className="mt-2 text-red-600">Email is required </span>}
            
        </div>
        <button className='btn bg-sky-400 text-white mt-3'>Add Announcement</button>
           </form>
        </div>
    );
};

export default Announcement;