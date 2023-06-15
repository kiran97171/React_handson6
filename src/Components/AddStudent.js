import React, { useContext } from 'react'
import contextData from './ContextAPI'
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

const AddStudent = () => {
  const data=useContext(contextData);
  const navi=useNavigate();
  const newStudent={
    name:"",
    age:"",
    course:"",
    batch:""
  }
  const handleChange=(e)=>{
    newStudent[e.target.name]=e.target.value;
  }
  const handleSubmit=()=>{
    data.entries.push(newStudent);
    navi('/student');
  }
  const cancel=()=>{
    navi('/student');
  }
  return (
    <>
    <Nav/>
    <div className='add-student'>
    <div className='label'>
    <label>Name :</label><br></br>
    <input type="text" placeholder="Enter Name" name="name" onChange={handleChange}/>
    </div>
    <div>
    <label>Age :</label><br></br>
    <input type="text" placeholder="Enter Age" name="age" onChange={handleChange}/>
    </div>
    <div>
    <label>Course :</label><br></br>
    <input type="text" placeholder="Enter Course" name="course" onChange={handleChange}/>
    </div>
    <div>
    <label>Batch :</label><br></br>
    <input type="text" placeholder="Enter Batch" name="batch" onChange={handleChange}/>
    </div>
    </div>
    <button onClick={handleSubmit} className='btn'>Add new</button>
    <button onClick={cancel} className='cancel'>Cancel</button>
    
    </>
  )
}

export default AddStudent