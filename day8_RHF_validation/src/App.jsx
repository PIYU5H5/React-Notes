import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([])

  return (
    <div className="p-3 flex flex-col gap-5">
      <h1>this is nav bar</h1>
      <Navbar  setToggle={setToggle}/>
      {toggle ? (
        <div className="flex">
          {
            users.map((elem) =>
            {
              return<Usercard user = {elem}/>
            })
          }
        </div>
      ) : (
        <div className="h-[70%] flex justify-center items-center">
          <Form setUsers={setUsers} />
        </div>
      )}
    </div>
  );
};

export default App;
