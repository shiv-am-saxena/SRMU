import { useState } from 'react'
import { login } from '../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from './Button';
import Input from './Input';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';

const Signup = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(null);
    const create = async (data) => {
        setError("");
        try {
            const session = await authService.createAccount(data);
            if (!session) {
                throw new Error("Sign Up failed");
            }
            const userData = await authService.getCurrentUser();
            if (userData) {
                dispatch(login({ userData }));
                navigate('/');
            }

        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                <p className="mt-2 text-center text-base text-black/60">Already have an account? &nbsp; <Link to='/login' className='font-medium text-primary transition-all duration-200 hover:underline'>Sign In</Link></p>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <form onSubmit={handleSubmit(create)} className="space-y-4">
                    <div>
                        <Input label='Name: '
                            placeholder='Enter your full name'
                            type='text'
                            {...register('name', {
                                required: 'Name is required'
                            })}
                        />
                    </div>
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
                    <Button type='submit' className='w-full'>Sign Up</Button>
                </form>
            </div>
        </div>
    )
}

export default Signup