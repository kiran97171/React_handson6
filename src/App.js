import './App.css';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Student from './Components/Student';
import ContactUs from './Components/ContactUs';
import { useState } from 'react';
import contextData from './Components/ContextAPI';
import AddStudent from './Components/AddStudent';
import UpdateStudent from './Components/UpdateStudent';
import { Link } from 'react-router-dom';

function App() {
  const [data,setData]=useState([
    {name:"John",age:"24",course:"MERN",batch:"October"},
    {name:"Doe",age:"25",course:"MERN",batch:"November"},
    {name:"Biden",age:"26",course:"MERN",batch:"September"},
    {name:"Barar",age:"22",course:"MERN",batch:"Setember"},
    {name:"Christ",age:"23",course:"MERN",batch:"October"},
    {name:"Elent",age:"24",course:"MERN",batch:"November"},
  ])
  return (
    <>
    <div className='app'>
    <div className='links'>
    <Link to="/" className='link'>Home</Link>
    <Link to="/student" className='link'>Students</Link>
    <Link to="/contactus" className='link'>Contact Us</Link>
    </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/student" element={
        <contextData.Provider value={{entries:data,updateData:setData}}>
        <Student/>
        </contextData.Provider>
        }/>
        <Route path="/newstudent" element={
          <contextData.Provider value={{entries:data,updateData:setData}}>
          <AddStudent/>
          </contextData.Provider>
        }/>
        <Route path="/Student/UpdateStudent" element={
          <contextData.Provider value={{entries:data,updateData:setData}}>
          <UpdateStudent/>
          </contextData.Provider>
        }/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
      </Routes>
  
    </div>
    </>
  );
}

export default App;