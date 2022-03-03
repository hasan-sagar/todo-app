import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Show.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    navigate 
  } from "react-router-dom";

export default function Show() {

    const [datas,setDatas] = useState([])

    useEffect(() => {
      apiDatas()
    }, [])
    

    const apiDatas = () => {
        axios.get("http://localhost:3500/tasks")
        .then(response => {
            const newData  = response.data
            //console.log(response.data);
            setDatas(newData)
        })
    }

    const getData = () => {
        axios.get("http://localhost:3500/tasks")
            .then((getData) => {
                setDatas(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:3500/tasks/${id}`)
        .then(() => {
            getData();
        })
    }
    
    const seeId = (id,task,time) => {
        localStorage.setItem("ID",id)
        localStorage.setItem("task",task)
        localStorage.setItem("time",time)
        console.log(id);
    }

  return (
    <div>
<section>
    <table className="table">
        <thead>
            <tr>
                <th>id</th>
                <th>Task</th>
                <th>Time</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
           
              {
                  datas.map((data)=>(
                      <tr key={data.id}>
                          <td>{data.id}</td>
                          <td>{data.task}</td>
                          <td>{data.time}</td>
                          <td>
                              <Link to="/update">
                               <button onClick={() => seeId(data.id,data.task,data.time)} type="button" className="btn ok btn-success">Update</button>
                              </Link>
                         
                          
                              
                               <button  onClick={() => onDelete(data.id)} type="button" className="btn ok btn-danger">Delete</button>
                              
                          </td>
                      </tr>
                  ))
              }
            
  </tbody>
    </table>
    <Link to="/" style={{ color:"black" , textDecoration:"none" }}>
                <button className='btn btn-primary'>
                  Back to Add Page
                </button>
    </Link>
    </section>
    </div>
  )
}
