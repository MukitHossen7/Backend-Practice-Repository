import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const usersInfo = useLoaderData();
  const [users, setUsers] = useState(usersInfo);
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
        fetch(`https://fastfood-server.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your user has been deleted.",
                icon: "success",
              });
              const updatedUsers = users.filter((user) => user._id !== id);
              setUsers(updatedUsers);
            }
            console.log(data);
          });
      }
    });
  };
  return (
    <div>
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
              {users.map((userInfo) => (
                <tr key={userInfo._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={userInfo.photo} alt="Photo" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{userInfo.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost py-3 badge-sm">
                      {userInfo.email}
                    </span>
                  </td>
                  <td>{userInfo.creationTime}</td>
                  <td>{userInfo.lastSignInTime}</td>
                  <th className="flex items-center gap-3">
                    <Link
                      to={`/userDetails/${userInfo._id}`}
                      className="btn btn-sm hover:bg-pink-400 bg-pink-400"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => handleDelete(userInfo._id)}
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
    </div>
  );
};

export default Users;
