import React, { useState } from "react";

const Que4B=()=>{
    const [text,setText]=useState("welcome")
    const handleChange=(str)=>(
       setText(str)
    )
    
    console.log(text)
    return (
        <div>
            <p>welcome convert into thanks</p>
            <p>{text}</p>
           <button onClick={()=>handleChange("Thanks")}>Subscribe</button>
        </div>
    )
}

export default Que4B