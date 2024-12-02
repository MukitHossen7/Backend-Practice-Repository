import { useState } from "react";
import {
  MdDone,
  // MdOutlineDoneAll,
  MdOutlineSystemUpdateAlt,
} from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllScedule = () => {
  const allSchedule = useLoaderData();
  const [schedulesData, setSchedulesData] = useState(allSchedule);

  const handleFindSchedule = (e) => {
    const search = e.target.value;
    console.log(search);
    fetch(`https://gym-server-theta.vercel.app/schedules?title=${search}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSchedulesData(data);
      });
  };
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
        fetch(`https://gym-server-theta.vercel.app/schedules/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const updatedData = schedulesData.filter(
                (schedule) => schedule._id !== id
              );
              setSchedulesData(updatedData);
              Swal.fire({
                title: "Deleted!",
                text: "Your client has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="mt-10">
      <div className="w-[400px] mx-auto mb-4">
        <input
          type="text"
          name="search"
          onChange={handleFindSchedule}
          placeholder="search"
          className="input input-bordered w-full"
          required
        />
      </div>
      <div className="w-11/12 mx-auto bg-slate-50">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>serial</th>
                <th>Title</th>
                <th>Day</th>
                <th>Date</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {schedulesData.map((data, idx) => (
                <tr key={data._id}>
                  <th>
                    <label>{idx + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{data.title}</div>
                      </div>
                    </div>
                  </td>
                  <td>{data.day}</td>
                  <td>{data.date}</td>
                  <td>{data.time}</td>
                  <th className="flex items-center gap-3">
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="btn bg-pink-600 hover:bg-pink-600 text-white btn-sm"
                    >
                      X
                    </button>
                    <Link
                      to={`/updateSchedule/${data._id}`}
                      className="btn bg-pink-600 hover:bg-pink-600 text-white btn-sm"
                    >
                      <MdOutlineSystemUpdateAlt className="text-xl" />
                    </Link>
                    <button className="btn bg-pink-600 hover:bg-pink-600 text-white btn-sm">
                      {/* <MdOutlineDoneAll /> */}
                      <MdDone />
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

export default AllScedule;
