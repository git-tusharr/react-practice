import { useState, useMemo } from "react";

const App = () => {
  const [num, setNum] = useState("");
  const [name, setName] = useState("");

  const myVal = useMemo(() => {
    for (let i = 0; i <= 1000000000; i++) {} // simulating heavy work
    return num * 2;
  }, [num]);

  return (
    <>
      <h1>Welcome</h1>

        Select number :{" "}
        <input
          type="number" value={num} onChange={(e) => setNum(Number(e.target.value))}
        />
      <br />
        Enter name :{" "}
        <input
          type="text" value={name} onChange={(e) => setName(e.target.value)}
        />

      <h2>My thousand : {myVal}</h2>
    </>
  );
};

export default App;
