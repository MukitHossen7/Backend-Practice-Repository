import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();
      setUser(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Client Managements Data {user.length}</h1>
    </>
  );
}

export default App;
