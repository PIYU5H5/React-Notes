import React, { useState } from 'react'


const Register = ({setToggle}) => {
  const [formData, setFormData] = useState({})
  const [users, setUsers] = useState([])

  let handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsers([...users,formData])
  }

  return (
    <div className='bg-white w-90 flex flex-col justify-center items-center rounded-xl p-6 gap-2'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className='w-40 flex flex-col gap-4' action="">

            <input name="Name" onChange={handleChange} className = 'p-2 border border-gray-400 rounded' type="text" placeholder='Name' />
            <input name="Email"onChange={handleChange} className = 'p-2 border border-gray-400 rounded' type="text" placeholder='Email' />
            <input name= "Password"onChange={handleChange} className = 'p-2 border border-gray-400 rounded' type="text" placeholder='Password' />
            <button className='p-2 bg-blue-600 text-white rounded'>Register</button>
        </form>
        <p>Already have an account?<span onClick={() => setToggle(prev => !prev)} className='text-violet-600 cursor-pointer'>Login</span></p>
    </div>
  )
}

export default Register