import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../../config/FirebaseConfig';

const Dashboard = () => {


  const navigate = useNavigate()
  
  const signOff = () => {
    localStorage.clear();
    signOut(auth).then(val => {
      navigate('/registration')
    });
  }



  return (
    <div className='text-center '>
      <h1>Dashboard</h1>
      <div className=''>
        <button onClick={signOff} className="btn btn-danger btn-lg my-2">Sign Out</button><br />
        <Link to={'/addstudent'} className="btn btn-primary btn-sm mx-2">Add student</Link>
        <Link to={'/addcourse'} className="btn btn-primary btn-sm btn ">Add Course</Link>
        <Link to={'/attendance'} className="btn btn-primary btn-sm mx-2">Attendance</Link>
      </div>
    </div>
  )
}

export default Dashboard