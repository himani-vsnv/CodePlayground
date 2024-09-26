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
            <p>Counter Between 0 To 10 only </p>
           <button onClick={()=>handleMins()}>-</button>
           <p>{count}</p>
           <button onClick={()=>handlePlus()}>+</button>

        </div>
    )
 }

 export default Que3C