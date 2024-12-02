import { useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSchedule = () => {
  const updatesData = useLoaderData();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(
    updatesData.date ? new Date(updatesData.date) : new Date()
  );

  const handleUpdate = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const day = e.target.day.value;
    const time = e.target.time.value;
    const date = startDate.toLocaleDateString();
    console.log(title, day, time, date);
    const update = { title, day, time, date };
    fetch(`http://localhost:5000/schedules/${updatesData._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated your schedule");
          navigate(-1);
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] lg:p-24 rounded-lg mt-8">
      <h2 className="text-3xl text-center font-bold">Update Gym Schedule</h2>
      <form onSubmit={handleUpdate}>
        <div className="flex gap-6 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Title</span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={updatesData.title}
              placeholder="Title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control lg:w-1/2 mt-6 md:mt-0">
            <label className="label font-bold">
              <span className="label-text">Date</span>
            </label>
            <DatePicker
              className="input input-bordered w-full"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <div className="flex gap-6 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Day</span>
            </label>

            <select
              className="input input-bordered "
              defaultValue={updatesData.day}
              name="day"
              id="day"
            >
              <option value="sunday">Sunday</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
            </select>
          </div>
          <div className="form-control lg:w-1/2 mt-6 md:mt-0">
            <label className="label font-bold">
              <span className="label-text">Time</span>
            </label>

            <input
              className="input input-bordered w-full "
              name="time"
              defaultValue={updatesData.time}
            ></input>
          </div>
        </div>

        {/* End of Labels */}
        <input
          type="submit"
          value="Update Schedule"
          className="btn w-full hover:bg-pink-500 bg-pink-500 text-white mt-6"
        />
      </form>
    </div>
  );
};

export default UpdateSchedule;
