import { useState } from "react";
import React from "react";

const Que4C=()=>{
    // const [submit, setSubmit]=useState()
    const handleSubmit=()=>(
        alert("thanks")
    )
    return (
        <div>
            <p>When you click submit pop up "Thanks"</p>
            <button onClick={()=>handleSubmit()}>Submit</button>
        </div>
    )
}
export default Que4C