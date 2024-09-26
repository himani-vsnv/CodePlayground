import React, { useState } from 'react'

const Que11 = () => {
    const [task,setTask]=useState("")
    const [data,setData]=useState([])
    const handleChange=(e)=>(
        setTask(e.target.value)
    )
    
    const handleEnter=()=>{
        setData([...data,{task}]);
        setTask("")
    }
    // console.log(task)
    console.log(data)
  return (
    <div>
        <p style={{color:"blue", fontWeight:"bold ", fontSize:"26px"}}>Enter your Task (shows in list )</p>
      <input onChange={handleChange} value={task} placeholder="enter your task"/>
      <button onClick={()=>handleEnter()}>Enter</button>
      {data.map((list,index)=>(
        <div key={index}>
           <li>{list.task}</li>
        </div>
      ))}
    </div>
  )
}

export default Que11
