import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {login as authLogin} from '../../store/authSlice';
import { useDispatch } from "react-redux";
import {Button, Input, Logo} from '../index';
import authService from '../../appwrite/auth';
import {useForm} from 'react-hook-from';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState("");

    // Handle login use to submit login form
    const handleLogin = async(data) => {
        setError("");
        try {
            const session = await authService.login(data)
            if(session) {
                const userData = await authService.getCurrentUser() 
                if (userData) dispatch(authLogin(userData));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    }
    
  return (
    <div className='w-full flex items-center justify-center'>
        <div className={`w-full max-w-lg mx-auto bg-gray-100 p-10 rounded-xl border border-black/10`}>
            <div className="mb-2 flex justify-center">
                <span className="w-full inline-block max-w-[100px]">
                    <Logo width='100%'/>
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign into your account</h2>
            <p className='mt-2 text-center text-base text-black/60'>
                Don&pos;t have any account?&nbsp;
                <Link to="/signup" className='text-primary transition-all duration-200 font-medium hover:underline'>Sign Up</Link>
            </p>
            {
                error && <p className='text-red-700 mt-8 text-center'>{error}</p>
            }
            <form className='mt-8' onSubmit={handleSubmit(handleLogin)}>
                <div className="space-y-5">
                    <Input type="email" label= "Email : " placeholder="Enter your email" {...register("email", {
                        required: true,
                        validate: {
                            matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(value) || "Email address must be a valid address"
                        }                        
                    })}/>

                    <Input type="password" label="Password : " placeholder = "Enter your password" {...register("password", {
                        required : true
                    })}/>

                    <Button type='submit' className='w-full'>Sign in</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login