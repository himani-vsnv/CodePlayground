import React, { useState } from 'react'

const Que3B = () => {
    const [ count,setCount]=useState(0)

    const handleClikc=(value)=>(
          setCount(count+value)
    )
  return (
    <div>
        <p>Short</p>
      <button onClick={()=>handleClikc(-1)}>-</button>
      <p>{count}</p>
      <button onClick={()=>handleClikc(+1)}>+</button>
    </div>
  )
}

export default Que3B
