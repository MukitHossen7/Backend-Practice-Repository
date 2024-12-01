import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { FoodContext } from "../../Provider/ApiProvider";

const EditFood = () => {
  const loaderFoods = useLoaderData();
  const { setFoods } = useContext(FoodContext);
  const handleUpdateForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const price = e.target.price.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const updateFood = {
      name,
      photo,
      price,
      category,
      details,
    };
    fetch(`https://fastfood-server.vercel.app/foods/${loaderFoods._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateFood),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setFoods(data);
          Swal.fire({
            title: "Success",
            text: "Successfully updated your products",
            icon: "success",
          });
          //   window.location.href = "/";
        }
      });
  };
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto mt-10">
        <h2 className="text-2xl font-bold text-center mb-4">
          {" "}
          Update your Product
        </h2>
        <form className="space-y-4" onSubmit={handleUpdateForm}>
          {/* Fast Food Name */}
          <div>
            <label
              htmlFor="fastfood_name"
              className="block text-sm font-medium text-gray-700"
            >
              Food Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={loaderFoods?.name}
              placeholder="Enter fast food name"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Fast Food Photo */}
          <div>
            <label
              htmlFor="fastfood_photo"
              className="block text-sm font-medium text-gray-700"
            >
              Fast Food Photo (URL)
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={loaderFoods?.photo}
              placeholder="Enter image URL"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              defaultValue={loaderFoods?.price}
              placeholder="Enter price"
              min="1"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <input
              name="category"
              placeholder="Enter category"
              defaultValue={loaderFoods?.category}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></input>
          </div>

          {/* Details */}
          <div>
            <label
              htmlFor="details"
              className="block text-sm font-medium text-gray-700"
            >
              Details
            </label>
            <textarea
              name="details"
              defaultValue={loaderFoods?.details}
              placeholder="Enter details"
              rows="4"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFood;
