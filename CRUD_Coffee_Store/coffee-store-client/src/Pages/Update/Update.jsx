import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoffeeContext } from "../../Provider/ApiProvider";
import Swal from "sweetalert2";

const Update = () => {
  const { id } = useParams();
  const { coffees, setCoffees } = useContext(CoffeeContext);
  const [coffeeData, setCoffeeData] = useState(null);
  //   console.log(coffees);
  //   console.log(id);
  useEffect(() => {
    if (coffees.length > 0) {
      const findCoffees = coffees.find((coffee) => coffee._id === id);
      setCoffeeData(findCoffees);
    }
  }, [id, coffees]);
  //   console.log(coffeeData);
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const supplier = e.target.supplier.value;
    const category = e.target.category.value;
    const chef = e.target.chef.value;
    const taste = e.target.taste.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;

    const newCoffee = { name, supplier, category, chef, taste, details, photo };
    // console.log(newCoffee);
    fetch(`http://localhost:5000/coffee/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newCoffee),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          setCoffees(data);
          Swal.fire({
            title: "Success",
            text: "Successfully added Coffee to the list",
            icon: "success",
          });
          // alert("Updated successfully");
        }
      });
  };
  return (
    <div>
      <div className="pt-10">
        <h2 className="font-medium text-4xl text-center mb-10">
          Update New Coffee
        </h2>
        <div>
          <form onSubmit={handleUpdate}>
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
                    defaultValue={coffeeData?.name}
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
                    defaultValue={coffeeData?.supplier}
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
                    defaultValue={coffeeData?.category}
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
                    defaultValue={coffeeData?.chef}
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
                    defaultValue={coffeeData?.taste}
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
                    defaultValue={coffeeData?.details}
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
                defaultValue={coffeeData?.photo}
                required
                placeholder="Enter photo URL"
              />
            </div>
            <input
              type="submit"
              value="Update Coffee"
              className="btn bg-green-600 hover:bg-green-500 text-white w-full mt-7"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
