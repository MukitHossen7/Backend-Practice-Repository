import Swal from "sweetalert2";

const AddFood = () => {
  const handleFoodFrom = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const price = e.target.price.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const fastFood = { name, photo, price, category, details };
    fetch("http://localhost:5000/foods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fastFood),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Successfully Added Food Items",
            icon: "success",
          });
          e.target.reset();
        }
      });
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Add Fast Food</h2>
      <form className="space-y-4" onSubmit={handleFoodFrom}>
        {/* Fast Food Name */}
        <div>
          <label
            htmlFor="fastfood_name"
            className="block text-sm font-medium text-gray-700"
          >
            Fast Food Name
          </label>
          <input
            type="text"
            name="name"
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
          <select
            name="category"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="burger">Burger</option>
            <option value="pizza">Pizza</option>
            <option value="drinks">Drinks</option>
            <option value="Momos">Momos</option>
          </select>
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
            Add Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
