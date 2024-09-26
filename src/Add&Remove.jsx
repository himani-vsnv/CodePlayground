import React from 'react'

function All() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
    else {
      setCounter(0)
    }
  };

  const removeValue = () => {
    if (counter>0){
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Add & Remove</h1>
      <h2>count value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={removeValue}>remove vale</button>
      <h4>footer:{counter}</h4>
    </>
  );
}

export default All
