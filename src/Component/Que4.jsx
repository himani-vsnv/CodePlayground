import { useState } from "react";

const Que4=()=>{
    const [flag,setFlag]=useState(false)
    const handleToggle=()=>(
        setFlag(!flag)
    )
    console.log(flag)

    return(
        <div>
            <h3>{!flag? "click":"Love You"}</h3>
          <button onClick={()=>handleToggle()}>Toggle</button>
        </div>
    )
}
export default Que4