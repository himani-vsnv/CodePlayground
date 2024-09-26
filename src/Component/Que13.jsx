import React from 'react'

const Que13 = () => {

    const PrimeNum=()=>{
        for(let n=50; n<=100;n++){
            let count=0;
            for(let i=2;i<=Math.sqrt(n);i++){
               if(n%i==0){
                   count++;
                   break;
               }
            }
            if(count==0){
              return console.log(n,"is prime number")
            }
    }
   }
  
     const handleClick=()=>{
     PrimeNum()
   }
  return (
    <div>
        
        <button onClick={handleClick}><h1> Number</h1></button>
      
    </div>
  )
}

export default Que13
