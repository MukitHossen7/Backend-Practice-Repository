import { useContext } from "react";
import swal from "sweetalert";
import { CoffeeContext } from "../../Provider/ApiProvider";

const From = () => {
  const { coffees, setCoffees } = useContext(CoffeeContext);
  const handleCoffeeForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const supplier = e.target.supplier.value;
    const category = e.target.category.value;
    const chef = e.target.chef.value;
    const taste = e.target.taste.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;

    const coffeesData = {
      name,
      supplier,
      category,
      chef,
      taste,
      details,
      photo,
    };

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeesData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
          swal("success", "New Item Added Successfully", "success");
        }
        setCoffees([...coffees, data]);
      });
  };

  return (
    <div className="pt-10">
      <h2 className="font-medium text-4xl text-center mb-10">Add New Coffee</h2>
      <div>
        <form onSubmit={handleCoffeeForm}>
          <div className="flex gap-10">
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="name"
                  required
                  placeholder="Enter coffee name"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Supplier
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="supplier"
                  required
                  placeholder="Enter coffee supplier"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Category
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="category"
                  required
                  placeholder="Enter coffee category"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Chef
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="chef"
                  required
                  placeholder="Enter coffee chef"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Taste
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="taste"
                  required
                  placeholder="Enter coffee taste"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Details
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="details"
                  required
                  placeholder="Enter coffee details"
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Photo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="photo"
              required
              placeholder="Enter photo URL"
            />
          </div>
          <input
            type="submit"
            value="Add Coffee"
            className="btn bg-green-600 hover:bg-green-500 text-white w-full mt-7"
          />
        </form>
      </div>
    </div>
  );
};

export default From;
