import { useContext } from "react";
import { CoffeeContext } from "../../Provider/ApiProvider";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const CoffeeCard = () => {
  const { coffees, setCoffees } = useContext(CoffeeContext);
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
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              // kaj kora kano boglam na
              const newCoffee = coffees.filter((coff) => coff._id !== id);
              setCoffees(newCoffee);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });

    // fetch(`http://localhost:5000/coffee/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.deletedCount > 0) {
    //       const newCoffee = coffees.filter((coff) => coff._id !== id);
    //       setCoffees(newCoffee);
    //       alert("Deleted successfully");
    //     }
    //     // kaj kora kano boglam na
    //   });
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
