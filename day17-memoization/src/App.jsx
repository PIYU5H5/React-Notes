import React, { useCallback, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Piyush", id: 555 });
  let greet = useCallback(() => {
    console.log("Hey good ev");
  },[]);

  return (
    <div>
      <h1>Memoization</h1>
      <h2>Count is {count}</h2>
      <h2>name is {user}</h2>
      <button onClick={() => setUser({ ...user, name: "yo" })}>
        Change Name
      </button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Home greet={greet} />
      <About greet={greet} />
    </div>
  );
};

export default App;
