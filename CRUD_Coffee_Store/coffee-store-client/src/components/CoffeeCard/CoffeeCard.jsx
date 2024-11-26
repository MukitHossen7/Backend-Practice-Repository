import { useContext } from "react";
import { CoffeeContext } from "../../Provider/ApiProvider";

/* eslint-disable react/prop-types */
const CoffeeCard = () => {
  const { coffees, setCoffees } = useContext(CoffeeContext);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/coffee/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // kaj kora kano boglam na
        const newCoffee = coffees.filter((coff) => coff._id !== id);
        setCoffees(newCoffee);
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {coffees.map((coffee, idx) => (
        <div
          key={idx}
          className="md:flex justify-between gap-6 shadow-md p-10 rounded-lg "
        >
          <div>
            <img
              src={coffee?.photo}
              className="w-full h-56 object-cover rounded-lg"
            ></img>
          </div>
          <div className="flex flex-col gap-5 font-medium">
            <h2>Name: {coffee?.name}</h2>
            <p>Category: {coffee?.category}</p>
            <p>Chef: {coffee?.chef}</p>
          </div>
          <div className="flex flex-col gap-3">
            <button className="btn">View</button>
            <button className="btn">Edit</button>
            <button
              onClick={() => handleDelete(coffee._id)}
              className="btn bg-red-500 text-white hover:bg-red-500"
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoffeeCard;
