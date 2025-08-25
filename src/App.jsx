import { useReducer } from "react";

const App = () => {
  const colorMethod = (state, action) => {
    switch (action) {
      case "red":
        return "red";
      case "green":
        return "green";
      case "blue":
        return "blue";
      case "yellow":
        return "yellow";
      default:
        return state;
    }
  };

  const [color, dispatch] = useReducer(colorMethod, "violet");

  return (
    <>
      <button onClick={() => dispatch("red")}>Red</button>
      <button onClick={() => dispatch("blue")}>Blue</button>
      <button onClick={() => dispatch("green")}>Green</button>
      <button onClick={() => dispatch("yellow")}>Yellow</button>

      <div
        style={{
          backgroundColor: color,
          width: "300px",
          height: "200px",
          marginTop: "10px",
        }}
      ></div>
    </>
  );
};

export default App;
