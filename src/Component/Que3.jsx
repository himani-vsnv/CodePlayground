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
            <p>Increase & Decrease Count</p>
         <button onClick={()=>handleMins()}>-</button>
         <p>{count}</p>
         <button onClick={()=>handlePlus()}>+</button>
        </div>
    )
}

export default Que3