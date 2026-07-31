import React, { useCallback, useMemo, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Piyush", id: 555 });
  let greet = useCallback(() => {
    console.log("Hey good ev");
  }, []);
  let calculation = useMemo(() => {
    console.log("calculation running");
    let sum = 0;

    for (let i = 0; i < 10000000; i++) {
      sum += i;
    }
    return sum;
  }, []);
  return (
    <div>
      <h1>Memoization</h1>
      <h2>Count is {count}</h2>
      <h2>name is {user}</h2>
      <h2>my calculation is {calculation}</h2>
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
