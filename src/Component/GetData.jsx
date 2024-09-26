import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GiMatterStates } from 'react-icons/gi'

const GetData = () => {
    const intialValue={name:"",email:"",id:null}
    const [userData,setUserData]=useState(intialValue)
    const [state,setState]=useState([])

    const handleChange=(e)=>{
         setUserData({...userData,[e.target.name]:e.target.value})
    }

    const PostApi=async()=>{
      const resp= await axios.post('https://crudcrud.com/api/dd645305614a4ec69307af939458803c/userdata')
      setState(resp.data)
    }

    useEffect(()=>{
      GetApi()
    },[])

    const handleSubmit=(e)=>{
      e.preventDefault()
      PostApi()
    }
      

    console.log(userData)
    console.log(state)

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2>Name</h2>
        <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="enter your Name"/><br/>
        <h2>Email</h2>
        <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="@gmail.com"/>
        <button>Submit</button> 
      </form>
      <h1>{input}</h1>
    </div>
  )
}

export default GetData
