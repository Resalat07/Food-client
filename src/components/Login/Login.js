import Lottie from 'lottie-react'
import loginn from '../../image/loginhi.json'
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {

    const [ error,setErr] =useState()

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'
    const { login } = useContext(AuthContext)



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        login(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                // console.log(user);
                // navigate(from, { replace: true })


                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);


                fetch('https://food-server-iota.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        localStorage.setItem('food-token', data.token);
                        navigate(from, { replace: true });
                    });
            })
            .catch(err => setErr(err.message));
    }




    return (
        <div>
            <div className="hero  bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                        <Lottie animationData={loginn} loop={false} />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-9">
                        <div className="card-body">
                            <form onSubmit={handleLogin} className="card-body">
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
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link href="#" to='/register' className="label-text-alt link link-hover">Or Register .</Link>
                                    </label>
                                    <label className="label">
                                        <p  className="label-text-alt link link-hover">{error}</p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;