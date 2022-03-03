import React, { useState } from 'react'
import './Add.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  navigate 
} from "react-router-dom";

export default function Add() {

  const [task , setTask] = useState('');
  const [time , setTime] = useState('');

  const taskChange = (e) => {
      setTask(e.target.value);
  }
  const timeChange = (e) => {
      setTime(e.target.value);
  }
  const submitClickData = () => {
    axios.post("http://localhost:3500/tasks",{
      task,time
    })
    alert("sure?")
  }
 

  return (
    <div>
        <main>

        <form onSubmit={submitClickData}>
            <h1>Add Task Page</h1>
            <hr />
            <div className="mb-3">
                <label className="form-label">Enter Task</label>
                <input type="text" className="form-control" onChange={taskChange}/>
            </div>

            <div className="mb-3">
                <label  className="form-label">Enter Time or Day</label>
                <input type="text" className="form-control" onChange={timeChange}/>
            </div>
            
               <button  type="submit" className="btn btn-primary">
                 Add Task
              </button>
              <br /> <br />
              <Link to="/list" style={{ color:"black" , textDecoration:"none" }}>
                <button className='btn btn-primary'>
                  Show Add List
                </button>
              </Link>
           
        </form>
        
        </main>
    </div>
  )
}
