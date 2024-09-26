 import React, { useState } from 'react'

 const Que6 = () => {
    const [color, setColor]=useState("pink")
    const handleColor=(color)=>(
      setColor(color)
    )
   return (
     <div className='hello'style={{ width: "200px",
      height: "100px",
        background:(`${color}`)
     }}>
      <p>color Change Onclick</p>
    <button onClick={()=>handleColor("blue")}>BgColor</button>
      </div>
   )
 }
 
 export default Que6
 