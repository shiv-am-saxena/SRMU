// import React from 'react'
// import { Input, Button } from './';
// function Login() {
//   return (
//     <div className='w-1/3 p-3 bg-blue-500'>
//       <div className='flex flex-col '>
//         <h1 className='text-center'>Login</h1>
//         <Input label='Email: ' type='email' placeholder='Enter your email address' />
//       </div>
//     </div>
//   )
// }

// export default Login


import { useState } from 'react'
import { login as authLogin } from '../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from './Button';
import Input from './Input';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(null);
    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if (!session) {
                throw new Error("Login failed");
            }
            const userData = await authService.getCurrentUser();
            if (userData) {
                dispatch(authLogin({ userData }));
                navigate('/');
            }

        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <div className="flex items-center justify-center min-h-[70vh]">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <p className="mt-2 text-center text-base text-black/60">Don&apos;t have an account? &nbsp; <Link to='/signup' className='font-medium text-primary transition-all duration-200 hover:underline'>Sign Up</Link></p>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <form onSubmit={handleSubmit(login)} className="space-y-4">
                    <div>
                        <Input label='Email: '
                            placeholder='Enter your email address'
                            type='email'
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Email address must be a valid email address'
                                }
                            })}
                        />
                    </div>
                    <div>
                        <Input label="Password: "
                            placeholder="Enter your password"
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long'
                                }
                            })} />
                    </div>
                    <Button type='sdubmit' className='w-full'>Log In</Button>
                </form>
            </div>
        </div>
    )
}

export default Login