import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loaderUser = useLoaderData();
  const [users, setUsers] = useState(loaderUser);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-six-mu.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your users has been deleted.",
                icon: "success",
              });
              const newUsers = users.filter((user) => user._id !== id);
              setUsers(newUsers);
            }
          });
      }
    });
  };
  return (
    <div className="mt-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Check</th>
              <th>Name</th>
              <th>Email</th>
              <th>Creation Time</th>
              <th>Last Login Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.photo} alt="Photo" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost py-3 badge-sm">
                    {user.email}
                  </span>
                </td>
                <td>{user.creationTime}</td>
                <td>{user.lastSignInTime}</td>
                <th className="flex items-center gap-3">
                  <button className="btn btn-sm hover:bg-pink-400 bg-pink-400">
                    View
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn hover:bg-red-500 bg-red-500 btn-sm text-white"
                  >
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
