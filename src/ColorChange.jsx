import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [flag, setFlag] = useState(false);
  const handleToggle = () => {
    setFlag(!flag);
  }
  
  return (
    <div
      className="hello"
      style={{
        background: ` ${flag ? "black" : "red"} `,
      }}
    >
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default App;