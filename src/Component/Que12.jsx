import React, { useState } from "react";
import Qus12COM from "./Qus12COM";

const Que12 = () => {
  const data = [
    { id: 1, item: "noodle", price: 100 },
    { id: 2, item: "rice", price: 50 },
    { id: 3, item: "bread", price: 30 },
    { id: 4, item: "milk", price: 60 },
  ];
  const [aIndex, setIndex] = useState(0);

  const handleSlide = (value) => setIndex(aIndex + value);

  return (
    <>
    <div style={{border:"2px solide orange"}}>
      <p style={{color:"blue", fontWeight:"bold ", fontSize:"26px"}}>Slide Prev & Next</p>
      {data.map(
        (list, index) =>
          aIndex === index && (
            <Qus12COM
            key={index}
              id={list.id}
              item={list.item}
              price={list.price}
            />
          )
      )}
      <button onClick={() => handleSlide(-1)}>Prev</button>
      <button onClick={() => handleSlide(+1)}>Next</button>
    </div>
    </>
  );
};

export default Que12;
