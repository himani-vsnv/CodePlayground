import React, { useState } from "react";
import {FaUser, FaYoutube} from 'react-icons/fa'
const Que2 = () => {
    const[like, setLike]=useState(0)
    const handleClick=()=>(
        setLike(like+1)
    )
    console.log(like)
  return (
  <div>
    <p>Conter</p>
     <h3>{like}</h3>
    <button onClick={handleClick} style={{background:"blue", color:"white"}}>Like</button>
    <FaYoutube/>
    <FaUser />
   
  </div>
  );
};

export default Que2