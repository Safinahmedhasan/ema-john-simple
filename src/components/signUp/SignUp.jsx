import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../providers/AuthProviders';
const SignUp = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password , confirm);

        setError('');
        if(password !== confirm){
            setError(toast.error('Your password did not match 😟 '))
            return
        }
        else if(password.length < 6){
            setError(toast.error('Your password be 6 characters or longer 😔'))
            return
        }
        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate('/login')
        })
        .catch(error => {
            console.log(error);
            setError(error.message)
            setError(toast.error('Already have a account Go to Login 🙂'))
        })
    }

    return (
        <div>
             <div className='form-container'>
             {/* <p className='error'>{error}</p> */}
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' id='' required placeholder='Enter Your Email' />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='' required placeholder='Enter Your password' />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' id='' required placeholder='Enter Your Confirm Password' />
                    <button className='btn'>Sign Up</button>
                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                    <Toaster />
                </div>

            </form>
        </div>
        </div>
    );
};

export default SignUp;