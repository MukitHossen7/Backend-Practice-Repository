import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UserDetails = () => {
  const updateInfo = useLoaderData();

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const updatedUsers = { name, photo };

    fetch(`https://fastfood-server.vercel.app/users/${updateInfo._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedUsers),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfully updated",
            text: "You clicked the button!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div>
      <div className="flex items-center justify-center py-28">
        <form
          className="bg-white p-6 rounded shadow-md w-96"
          onSubmit={handleUpdateUser}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Update User Profile
          </h2>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={updateInfo.name}
              placeholder="Enter your name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="photoUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={updateInfo.photo}
              placeholder="Enter photo URL"
              className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
