import React, { useState } from 'react'

export default function Register() {
  const [userData,setuserData] = useState(
    {"email":"",
    "name":"",
    "password":""
  });

  const handleData = (column,e)=>{
    setuserData((data)=>({
      ...data,
      [column]:e.target.value
    }))
  }
  const handleRegister = () =>{
    console.log(userData)
  }
  return (
    <div className='container mt-5 d-flex flex-column justify-content-center align-items-center border p-4'>
      <h5 className='text-center'>Create Account</h5>
      <div className="mb-3 col-4">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" onChange={(e)=>handleData('email',e)} />
      </div>
      <div className="mb-3 col-4">
        <label htmlFor="name" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="name" onChange={(e)=>handleData('name',e)} />
      </div>
      <div className="mb-3 col-4">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" onChange={(e)=>handleData('password',e)} />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleRegister}>Register</button>
    </div>
  )
}
