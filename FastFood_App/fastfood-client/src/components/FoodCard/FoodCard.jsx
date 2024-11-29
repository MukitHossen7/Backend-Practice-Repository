import { useContext } from "react";
import { FoodContext } from "../../Provider/ApiProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const FoodCard = () => {
  const { foods, setFoods } = useContext(FoodContext);
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
        fetch(`http://localhost:5000/foods/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const updatedFoods = foods.filter((food) => food._id !== id);
              setFoods(updatedFoods);
              Swal.fire({
                title: "Deleted!",
                text: "Your Product has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="mt-10">
      <h2 className="font-semibold text-3xl text-center">
        Our Fast_Foods Items {foods?.length}
      </h2>
      <Search></Search>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {foods.map((food) => (
          <div
            key={food._id}
            className=" rounded overflow-hidden shadow-md bg-white"
          >
            <img
              className="w-full h-48 object-cover"
              src={food?.photo}
              alt="images"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{food?.name}</div>
              <p className="text-gray-700 text-base">{food?.details}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  #{food?.category}
                </span>
                <span className="text-lg font-bold text-green-500">
                  ${food?.price}
                </span>
              </div>
            </div>
            <div className="px-6 py-4 flex justify-between">
              <Link
                to={`foodDetails/${food._id}`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                View
              </Link>
              <Link
                to={`/editFood/${food._id}`}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(food._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCard;
