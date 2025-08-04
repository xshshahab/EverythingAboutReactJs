import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../appwrite/auth';
import {login} from '../../store/authSlice';
import { useDispatch } from "react-redux";
import {Button, Input, Logo} from '../index';
import {useForm} from 'react-hook-from';

const SignUp = () => {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [error, setError] = useState('');
	const {register, handleSubmit} = useForm();

	const handleSignUp = async(data) => {
		setError("");
		try {
			const createUser = await authService.createAccount(data);
			if (createUser) {
				const userData = await authService.getCurrentUser() 
                if (userData) dispatch(login(userData));
                navigate("/");
			}
		} catch (error) {
			setError(error.message)
		}
	}

  return (
	<div className='flex justify-center items-center'>
		<div className={`mx-auto w-full max-w-lg bg-gray-100 border-black/10 rounded-xl border p-10`}>
			<div className="mb-2 flex justify-center">
				<span className='inline-block w-full max-w-[100px]'>
					<Logo width='100%' />
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
			<form className='mt-8' onSubmit={handleSubmit(handleSignUp)}>
                <div className="space-y-5">

					<Input label = "Name : " placeholder = "Enter your full name" {...register("name", {
						required : true
					})} />

                    <Input type="email" label= "Email : " placeholder="Enter your email" {...register("email", {
                        required: true,
                        validate: {
                            matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(value) || "Email address must be a valid address"
                        }                        
                    })}/>

                    <Input type="password" label="Password : " placeholder = "Enter your password" {...register("password", {
                        required : true
                    })}/>

                    <Button type='submit' className='w-full'>Create Account</Button>
                </div>
            </form>
		</div>
	</div>
  )
}

export default SignUp