/* eslint-disable no-unused-vars */
import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import registerImage from '../../assets/loginimage-removebg-preview.png'

const Register = () => {
    const [error,setError] = useState('')
    const {createUser,logOut} = useContext(AuthContext)
  
    const handelRegister = e => {
      e.preventDefault()
      const form = new FormData(e.currentTarget)
      const name = form.get('name')
      const photo = form.get('photo')
      const email = form.get('email')
      const password = form.get('password')
      setError('')
      // console.log(name,photo,email,password)
      createUser(email,password)
      .then(result => {
        logOut()
        console.log(result.user)
        updateProfile(result.user,{
          displayName: name,
          photoURL: photo
        })
        .then(()=>{
  
        })
        .catch((error)=>{
          console.error(error)
        })
      })
      .catch(error => {
        console.error(error)
      })
      if(password.length < 6){
        setError('please provide 6 characters or longer');
        return
      }
      else if(!/[A-Z]/.test(password)){
        setError('You should have a uppercase')
        return
      }
      else if(!/[!@#$%^&*()_+{}/[\]:;<>,.?~\\|]/.test(password)){
        setError('You should have a special character')
        return
      }
      
      toast('Register Successfully')
    }
    return (
        <div>
        <h3 className='text-center text-4xl font-semibold mt-8'>Please Register!!!</h3>
         <div className='flex md:flex-row flex-col'>
             <div className='flex-1'>
                 <img src={registerImage} className='' alt="" />
             </div>
             <div className='flex-1'>
             <div className=" bg-amber-100-100 mt-3">
       
       <div className="hero-content">
         
         <div className="static card flex-shrink-0 w-full max-w-sm shadow-2xl">
           <form onSubmit={handelRegister} className="card-body">
           <div className="form-control">
               <label className="label">
                 <span className="label-text">Name</span>
               </label>
               <input type="text" placeholder="name" name='name' className="input input-bordered" required />
             </div>
           <div className="form-control">
               <label className="label">
                 <span className="label-text">Photo URL</span>
               </label>
               <input type="url" placeholder="photo URL" name='photo' className="input input-bordered" required />
               
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Email</span>
               </label>
               <input type="email" placeholder="email" name='email' className="input input-bordered" required />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Password</span>
               </label>
               <input type="password" placeholder="password" name='password' className="input input-bordered" required />
               <label className="label">
                 
               </label>
               {
                 error && <p className="text-xl text-red-700">{error}</p>
               }
             </div>
             <div className="form-control mt-6">
               <button className="btn">Register</button>
             </div>
           </form>
               <ToastContainer></ToastContainer>
           <p className="text-center mb-10">Do not Have An Account ?<Link  className="text-blue-500 underline" to="/login" >Login</Link></p>
         </div>
       </div>
      
     </div>
             </div>
         </div>
       </div>
    );
};

export default Register;