import { useState, useEffect } from "react";

function TestApi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Change URL to your Spring Boot API
  const url = "http://localhost:8080/students";

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("API Error:", err);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>API Test from React</h1>

      <button onClick={fetchData}>
        Fetch Students
      </button>

      {loading && <p>Loading...</p>}

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default TestApi;
