import React, { useState } from "react";

 const Que3C=()=>{
    const [count,setCount]=useState(0)
    const handleMins=()=>{
        setCount(count-1)
        if(count<=0){
            setCount(count)
        }
    } 
    const handlePlus=()=>{
        setCount(count+1)
        if(count>=10){
            setCount(count)
        }
    }
    return (
        <div>
            <p style={{color:"blue", fontWeight:"bold ", fontSize:"26px"}}>Counter Between 0 To 10 only </p>
          <div style={{display:'flex', gap:'4px'}}>
          <button onClick={()=>handleMins()}>-</button>
           <p  style={{color:"pink",  fontSize:"20px"}}>{count}</p>
           <button onClick={()=>handlePlus()}>+</button>
          </div>

        </div>
    )
 }

 export default Que3C