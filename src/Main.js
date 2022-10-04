import { useEffect, useState } from "react";

const Main = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Henshin");
  }, []);

  useEffect(() => {
    console.log("Henkai");
    if (toggleTwo)
      console.log("toggleTwo slice of state is true so this code runs");
  }, [toggleTwo]);

  useEffect(() => {
    const myInterval = setInterval(() => {
      console.log(`UseEffect3 with interval number ${count} is running`);
    }, 100);

    return () => {
      console.log("end");
      clearInterval(myInterval);
    };
  }, [count]);
  return (
    <div>
      <h1>Main Component</h1>

      <button onClick={() => setToggleOne(!toggleOne)}>ToggleOne</button>
      <button onClick={() => setToggleTwo(!toggleTwo)}>ToggleTwo</button>
      <button onClick={() => setCount(count + 1)}> Increment </button>
      {count}
    </div>
  );
};

export default Main;
