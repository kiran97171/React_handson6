import React, { useContext } from 'react'
import Nav from './Nav'
import contextData from './ContextAPI'
import { Link, useNavigate } from 'react-router-dom'

const Student = () => {
    const dataContext=useContext(contextData);
    const navigate=useNavigate();
  return (
    <>
        <Nav/>
        <div className='details'>
        <h1>Students Details</h1>
        <button onClick={()=>navigate('/newstudent')}>Add New Student</button>
        </div>
        <div>
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Update</th>
              </tr>
              </thead>
      {dataContext.entries.map((item,index)=>{
        return (
            <tbody key={index}>
                <tr >
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.course}</td>
                    <td>{item.batch}</td>
                    <td><Link to='/updatestudent' state={{data:index}}>Edit</Link></td>
                </tr>
                </tbody>
        )
      })}
      </table>
    </div>
    </>
  )
}

export default Student