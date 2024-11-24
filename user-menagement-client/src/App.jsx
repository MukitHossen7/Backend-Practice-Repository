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
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const age = e.target.age.value;
    const profession = e.target.profession.value;
    const users = { name, age, profession };
    console.log(users);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser([...user, data]);
        e.target.reset();
      });
  };
  return (
    <>
      <h1>Client Managements Data {user.length}</h1>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="Enter Name" name="name" />
        <br />
        <br />

        <input type="number" placeholder="Enter Age" name="age" />
        <br />
        <br />
        <input type="text" placeholder="Enter Profession" name="profession" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {user.map((user) => (
        <div key={user.id}>
          <p>
            {user.name} : {user.age} : {user.profession}
          </p>
        </div>
      ))}
    </>
  );
}

export default App;
