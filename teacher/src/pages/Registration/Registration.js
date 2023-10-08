import React, { useEffect } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, database } from '../../config/FirebaseConfig'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"

export default function Registration() {
    const [login, setLogin] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e, type) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (type == 'signup') {
            createUserWithEmailAndPassword(auth, email, password).then(data => {
                setLogin(true);
            }).catch(err => alert(err.code));
        }
        else {
            signInWithEmailAndPassword(auth, email, password).then(data => {
                // console.log(data.user.uid)

                localStorage.setItem('email', email);
                setLogin(true);
                navigate('/');
            }).catch(err => alert(err.code));
        }
    }
    const LoginBtn = () => {
        setLogin(true)
    }
    const SignUpBtn = () => {
        setLogin(false);
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
        })
    });

    return (
        <div className='container text-center bg-opacity-25 bg-dark-subtle w-50'>
            <h1 className='mt-3 text-success'>Registration Form</h1>
            <button onClick={LoginBtn} className='btn btn-success w-25'>Login</button><button onClick={SignUpBtn} className='btn btn-info mx-1 w-25'>Sign Up</button>
            <h4 className='my-4'>{login ? 'Login' : 'Sign Up'}</h4>
            <form action="" onSubmit={(e) => handleSubmit(e, login ? 'login' : 'signup')}>
                <label htmlFor="email">Email</label>
                <br/>
                <input type="email" name="email" id=""  className='w-25'/><br /><br />
                <label htmlFor="password">Password</label>
                <br/>
                <input type="password" name="password" id=""  className='w-25'/><br /><br />
                <button typeof='submit' className='btn btn-primary w-25 mb-1'>{login ? 'Login' : 'Sign Up'}</button>
            </form>
        </div>
    )
}
