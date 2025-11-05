import axios from "axios";
import { useState } from "react";

const Display = () => {
  const [myData, setMyData] = useState([]);
  const [Visible, setVisible] = useState(false);

  const loadData = async () => {
    let api = "http://jsonplaceholder.typicode.com/todos";
    
    const response = await axios.get(api);
    console.log(response.data);
    
    setMyData(response.data);
    setVisible(true); 
  };

  const ans = myData.map((key) => {
    return (
      <tr key={key.id}>
        <td>{key.userId}</td>
        <td>{key.id}</td>
        <td>{key.title}</td>
        <td>{key.completed ? "Task Completed" : "Not Completed"}</td>
      </tr>
    );
  });

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>This is my Display</h1>

      {Visible && (
        <table
          border={1}
          align="center"
          style={{
            borderCollapse: "collapse",
            width: "80%",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <thead style={{ backgroundColor: "" }}>
            <tr>
              <th style={{ padding: "10px", border: "1px solid " }}>UserId</th>
              <th style={{ padding: "10px", border: "1px solid " }}>Id</th>
              <th style={{ padding: "10px", border: "1px solid " }}>Title</th>
              <th style={{ padding: "10px", border: "1px solid " }}>Completed</th>
            </tr>
          </thead>

          <tbody>
            {ans}
          </tbody>
        </table>
      )}

      <button
        onClick={loadData}
        style={{display: "block", margin: "20px auto", padding: "10px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "5px",cursor: "pointer",
        }}
      >
        Show Data
      </button>
    </>
  );
};

export default Display;
