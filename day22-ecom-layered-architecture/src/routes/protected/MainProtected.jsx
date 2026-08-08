import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import { store } from '../../app/store'

const MainProtected = () => {
  let {isAuthenticated,user,isloading} = useSelector((store) => store.auth)
  if(isloading) 
  {
    return <h1>Loading</h1>
  }
  if(!user) 
  {
    return <Navigate to={"/"}/>
  }
  return (
    <div><Outlet/></div>
  )
}

export default MainProtected