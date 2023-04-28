import React, { useContext, useState } from 'react';
import './Login.css'
import { Link , useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate()
    
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    console.log(from);

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signIn(email , password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error);
            setError(toast.error(' No Account. Please Sign Up 😥'))
        })
    }

   

    return (
        <div className='form-container'>
            <div className='container'>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='' required placeholder='Enter Your Email' />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="">Password</label>
                        <input type="password" name='password' id='' required placeholder='Enter Your Password' />
                        <button className='btn'>Login</button>
                        <p>New to Ema-john? <Link to='/signup'>Create New Account</Link></p>
                        <Toaster />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;