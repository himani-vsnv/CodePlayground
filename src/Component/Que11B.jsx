import React, { useState } from 'react'

const Que11B = () => {
    const [text,setText]=useState("")
    const [data,setData]=useState([])
     const handleChange=(e)=>(
        setText(e.target.value)
     )
    const handleAdd=()=>{
       setData([{id:data.length,
                staus:false,
                 title:text,
       },...data]);
       setText("")
    }
    const handleToggle=(x)=>{
    const Output=data.map((elem,index)=>{
            if(elem.id==x){
                return {...elem,status:!elem.status}
            }
        });
        setData([...Output])
    }
    const handleDlt=(y)=>{
     const Dlt=   data.filter((elem)=>{
            if(!elem.id==y){
                return {...elem}
            }
        });
        setData([...Dlt])
    }

  console.log (data);
  return (
    <div>
        <p style={{color:"blue", fontWeight:"bold ", fontSize:"26px"}}># Todo list Done/notdont & Dlt </p>
      <input onChange={handleChange} value={text} placeholder='Enter your work'/>
      <button onClick={handleAdd}>Add</button>
      {data.map((item,index)=>(
        <div key={index} style={{display:'flex'}}>
            <li>{item.title}</li>
            <button onClick={()=>handleToggle(item.id)} >{!item.status ? <p style={{ color:"black"}}>NotDone</p>: <p style={{ color:"blue"}}>Done</p>}</button>
            <button onClick={()=>handleDlt(item.id)} style={{color:"red"}}>Delete</button>

        </div>
      ))}
    </div>
  )
}

export default Que11B
