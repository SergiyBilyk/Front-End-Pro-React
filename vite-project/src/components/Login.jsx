import React from 'react'
import {useState} from 'react'

const Login = () => {

  const [data, setData] = useState({name: '', password:''})

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleOnChange= (e, name) => {
    setData({...data, [name]: e.target.value})
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.name}
            onChange={(e) => handleOnChange(e, "name")}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleOnChange(e, "password")}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login