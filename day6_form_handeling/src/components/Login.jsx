import React from 'react'

const Login = ({setToggle}) => {
  return (
    <div className='bg-white w-90 flex flex-col justify-center items-center rounded-xl p-6 gap-2'>
        <h1>login</h1>
        <form className='w-40 flex flex-col gap-4' action="">
            <input className = 'p-2 border border-gray-400 rounded' type="text" placeholder='Email' />
            <input className = 'p-2 border border-gray-400 rounded' type="text" placeholder='Password' />
            <button className='p-2 bg-blue-600 text-white rounded'>Login</button>
        </form>
        <p>User not found <span onClick={() => setToggle(prev => !prev)} className='text-violet-600 cursor-pointer'>Register</span></p>
    </div>
  )
}

export default Login