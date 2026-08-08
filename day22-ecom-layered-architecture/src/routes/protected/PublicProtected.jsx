import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { store } from '../../app/store'


const PublicProtected = () => {
  let {isAuthenticated,user,isloading} = useSelector((store) => store.auth)
  if(user) 
  {
    return <Navigate to={"/main"}/>
  }
  return (
    <div><Outlet/></div>
  )
}

export default PublicProtected