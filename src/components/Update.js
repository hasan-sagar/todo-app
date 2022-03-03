import React,{useEffect, useState} from 'react'
import './Add.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    navigate 
  } from "react-router-dom";

export default function Update() {

    const [task , setTask] = useState('');
    const [time , setTime] = useState('');
    const [getId , setGetId] = useState(null);

    useEffect(()=>{
        setTask(localStorage.getItem('task'));
        setTime(localStorage.getItem('time'));
        setGetId(localStorage.getItem('ID'))
    },[])

    const submitUpdateData = () => {
        axios.put(`http://localhost:3500/tasks/${getId}`,{
          task,time
        })
        alert("sure?")
      }

  return (
    <div>   
        <main>

<form>
    <h1>Update Task</h1>
    <hr />
    <div className="mb-3">
        <label className="form-label">Enter Task</label>
        <input value={task} onChange={(e)=>setTask(e.target.value)} type="text" className="form-control"/>
    </div>

    <div className="mb-3">
        <label  className="form-label">Enter Time or Day</label>
        <input value={time} onChange={(e)=>setTime(e.target.value)} type="text" className="form-control"/>
    </div>
    
       <button onClick={submitUpdateData}  type="submit" className="btn btn-primary">
         Update Task
      </button>
      <br /> <br />
      <Link to="/list" style={{ color:"black" , textDecoration:"none" }}>
                <button className='btn btn-primary'>
                  Back to List Page
                </button>
    </Link>
   
</form>

</main>
    </div>
  )
}
