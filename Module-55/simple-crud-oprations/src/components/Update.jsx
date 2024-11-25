import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loaderUsers = useLoaderData();
  console.log(loaderUsers);
  const handleUpdateForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };

    fetch(`http://localhost:3001/users/${loaderUsers?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h3>Update information of : {loaderUsers?.name}</h3>
      <form onSubmit={handleUpdateForm}>
        <label>
          Name:
          <input type="text" name="name" defaultValue={loaderUsers?.name} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" defaultValue={loaderUsers?.email} />
        </label>
        <br />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
