import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import contextData from './ContextAPI';
import Nav from './Nav';

const UpdateStudent = () => {
  const dataContext=useContext(contextData);
  const index=useLocation().state.data;
  const navi=useNavigate();

  const updateData={
    name:dataContext.entries[index].name,
    age:dataContext.entries[index].age,
    course:dataContext.entries[index].course,
    batch:dataContext.entries[index].batch
  }

  const handleChange=(e)=>{
    updateData[e.target.name]=e.target.value
  }

  const handleSubmit=()=>{
    dataContext.entries[index]=updateData;
    navi("/student");
  }

  const cancel=()=>{
    navi("/student");
  }

  return (
    <>
    <Nav/>
    <div className='add-student'>
    <div>
    <label>Name :</label><br></br>
    <input type="text" placeholder={dataContext.entries[index].name} name="name" onChange={handleChange}/>
    </div>
    <div>
    <label>Age :</label><br></br>
    <input type="text" placeholder={dataContext.entries[index].age} name="age" onChange={handleChange}/>
    </div>
    <div>
    <label>Course :</label><br></br>
    <input type="text" placeholder={dataContext.entries[index].course} name="course" onChange={handleChange}/>
    </div>
    <div>
    <label>Batch :</label><br></br>
    <input type="text" placeholder={dataContext.entries[index].batch} name="batch" onChange={handleChange}/>
    </div>
    </div>
    <button onClick={handleSubmit} className='btn'>Update</button>
    <button onClick={cancel} className='cancel'>Cancel</button>
    </>
  )
}

export default UpdateStudent