import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { database } from '../../config/FirebaseConfig';
import { toast } from 'react-toastify';

const AddStudent = () => {

  const [drop, setDrop] = useState('');
  const value = collection(database, 'student')

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [courseId, setCourseId] = useState('');



  const [val, setVal] = useState([]);
  const zoom = collection(database, 'course')


  const handleSubmit = async (e) => {
    e.preventDefault()

   
      try {


        await addDoc(value, { studentId: id, studentName: name, studentContact: contact, studentCourseId: drop });
        setId('')
        setName('')
        setContact('')
        setCourseId('')
        // console.log(drop)
        setDrop('')

        toast.success('Student added successfully');
      } catch (err) {
        console.log(err)
        toast.error('Something went wrong')
      }
    



  }


  return (
    <div className='text-center bg-opacity-25 bg-dark-subtle'>
      <h1 className=' text-success'>Enter Student Data</h1>
    

      <form onSubmit={handleSubmit} action="" className='my-4'>
        <label htmlFor="studentId" className=' text-black'>Enter Student Id</label>
        <br/>
        <input onChange={(e) => setId(e.target.value)} value={id} type="number" name="studentId" id="studentId"  className='w-25'/><br /><br />

        <label htmlFor="studentName">Enter Student Name</label>
        <br/>
        <input onChange={(e) => setName(e.target.value)} value={name} type="name" name="studentName" id="studentName" className='w-25 ' /><br /><br />

        <label htmlFor="studentContact">Enter Student Contact</label>
        <br/>
        <input onChange={(e) => setContact(e.target.value)} value={contact} type="number" name="studentContact" id="studentContact" className='w-25'/><br /><br />

        <label>Select your language</label>
        <br/>
        <select onChange={(e) => setDrop(e.target.value)} value={drop} id="select1" className=' w-25 mb-5'>
          <option value="Null"></option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="HTML">HTML</option>
        </select>


        <br />
        
        <button type='submit' className="btn btn-primary  w-25 m-xl-5">Submit</button>
        <Link to={'/'} className='btn btn-primary  w-25 ' >Go to Dashboard</Link>
      </form>
    </div>
  )
}

export default AddStudent