import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserCard from "../components/UserCard";
import { axiosInstance } from "../config/axiosInstance";

const Userspage = () => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  let getUsersData = async () => {
    try {
      let res = await axiosInstance.get('/users')
      setUsersData(res.data);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsersData();
  },[]);
  if(isLoading)
  {
    return <h1>Loading bhai</h1>
  }
  return <div className="grid grid-cols-4 gap-4">
    {
        usersData.map((val) => {
             return <UserCard key={val.id} user = {val}/>
        })
    }
  </div>;
};

export default Userspage;
