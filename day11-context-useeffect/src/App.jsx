import React, { useContext, useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { MyStore } from "./components/MyContext";
import axios from "axios"

const App = () => {
  let [setCount, count ] = useContext(MyStore);
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(null)

  let getData = async() =>{
    let res =await axios.get('https://fakestoreapi.com/products')
    console.log(res)
    setData(res)
  }
  useEffect(() =>{getData()},{})



  getData()
  useEffect(() => {
    console.log("App rendering");
  }, [toggle]);

  return (
    <div>
      <h1>hello - {count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
      <button onClick={() => setToggle((prev) => !prev)}>click</button>
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default App;
