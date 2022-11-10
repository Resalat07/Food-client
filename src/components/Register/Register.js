import React, { useContext, useState } from 'react';
import Lottie from 'lottie-react'
import loginn  from '../../image/login.json'
import { FaGoogle } from 'react-icons/fa'

import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';


const Register = () => {
    const [error , setError] =useState('');
    const { createUser , providerLogin} = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
            })
            .catch(err => setError(err.message));
    }


    const handleGoogleSignin = () => {
        providerLogin(new GoogleAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="hero  bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                        <Lottie animationData={loginn} loop={true} />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-9">
                        <div className="card-body">
                            <form onSubmit={handleSignUp} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link href="#" to='/login' className="label-text-alt link link-hover">Go to login</Link>
                                    </label>
                                    <label className="label">
                                        <p  className="label-text-alt link link-hover">{error}</p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>

                            <div className=' mx-auto'>
                                <p className='text-xl font-semibold text-orange-500 text-center m-3'>Or </p>
                            <button onClick={handleGoogleSignin} className="btn btn-outline"> Google <FaGoogle className='text-orange-500 ml-3'></FaGoogle> </button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;