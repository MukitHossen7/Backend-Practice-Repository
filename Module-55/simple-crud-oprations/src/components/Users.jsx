import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loaderUsers = useLoaderData();
  const [users, setUsers] = useState(loaderUsers);

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:3001/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setUsers(users.filter((user) => user._id !== _id));
        const remaining = users.filter((user) => user._id !== _id);
        setUsers(remaining);
      });
  };
  return (
    <div>
      <h2>Hello Users : {users.length}</h2>
      {users.map((user) => (
        <div
          style={{
            border: "1px solid red",
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
          }}
          key={user._id}
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button onClick={() => handleDelete(user._id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Users;
