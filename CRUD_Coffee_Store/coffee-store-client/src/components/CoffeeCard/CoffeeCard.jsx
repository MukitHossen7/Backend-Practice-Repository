/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee }) => {
  const { name, category, chef, photo } = coffee;
  return (
    <div className="md:flex justify-between gap-6 shadow-md p-10 rounded-lg ">
      <div>
        <img src={photo} className="w-full h-56 object-cover rounded-lg"></img>
      </div>
      <div className="flex flex-col gap-5 font-medium">
        <h2>Name: {name}</h2>
        <p>Category: {category}</p>
        <p>Chef: {chef}</p>
      </div>
      <div className="flex flex-col gap-3">
        <button className="btn">View</button>
        <button className="btn">Edit</button>
        <button className="btn">X</button>
      </div>
    </div>
  );
};

export default CoffeeCard;
