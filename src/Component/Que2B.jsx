import React, { useState } from "react";

 const Que2B=()=>{
    const [count,setCount]=useState(0)
     
    const hanleCount=()=>{
       setCount(count+1)
       if(count === 5){
        setCount(count)
       }
    }
    return(
        <div>
            <p>Stop Count at 5</p>
            <h3>{count}</h3>
             {/* 1method if than button work like stop at 5 */}
            
        <button onClick={()=>hanleCount()}>Limit 5</button>

            {/* 2method is disable usme if statemenyt ni likhna */}
        <button disabled={count===10} onClick={()=>hanleCount()}>Limit 10</button>

        </div>
    )
 }
  export default Que2B