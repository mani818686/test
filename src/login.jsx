import React, { useState } from 'react'

export default function Login() {
    const [userData,setuserData] = useState(
        {"email":"",
        "password":""
      });
    
      const handleData = (column,e)=>{
        setuserData((data)=>({
          ...data,
          [column]:e.target.value
        }))
      }
      const handleLogin= () =>{
        console.log(userData)
      }
    return (
        <div className='container mt-5 d-flex flex-column justify-content-center align-items-center border p-4'>
            <h5 className='text-center'>Login Your Account</h5>
            <div className="mb-3 col-4">
                <label htmlFor="email" className="htmlForm-label">Email address</label>
                <input type="email" className="htmlForm-control" id="email"  onChange={(e)=>handleData('email',e)} />
            </div>
            <div className="mb-3 col-4">
                <label htmlFor="password" className="htmlForm-label">Password</label>
                <input type="password" className="htmlForm-control" id="password" onChange={(e)=>handleData('password',e)}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
    )
}
