import { useState }  from "react";

const Que3=()=>{
    const [count,setCount]=useState(0)
      const handleMins=()=>(
        setCount(count-1)
      )
      const handlePlus=()=>(
        setCount(count+1)
      )
    
    
    return (
        <div>
            <p style={{color:"blue", fontWeight:"bold ", fontSize:"26px"}}>Increase & Decrease Count</p>
        <div style={{display:'flex', gap:'4px', alignItems:'center'}}>
          <button style={{widtht:"20px",  height:"20px"}} onClick={()=>handleMins()}>-</button>
          <p style={{color:"purple",  fontSize:"20px"}}>{count}</p>
          <button style={{widtht:"20px",  height:"20px"}} onClick={()=>handlePlus()}>+</button>
        </div>
        </div>
    )
}
export default Que3