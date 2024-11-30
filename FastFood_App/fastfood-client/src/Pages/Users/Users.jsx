const Users = () => {
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
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://avatars.githubusercontent.com/u/80270685?v=4"
                          alt="Photo"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Mukit</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost py-3 badge-sm">
                    mukit@gmail.com
                  </span>
                </td>
                <td>sunday</td>
                <td>2024</td>
                <th className="flex items-center gap-3">
                  <button className="btn btn-sm hover:bg-pink-400 bg-pink-400">
                    View
                  </button>
                  <button className="btn hover:bg-red-500 bg-red-500 btn-sm text-white">
                    X
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
