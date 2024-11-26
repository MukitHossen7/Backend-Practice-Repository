import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <h2 className="font-semibold text-3xl mt-8 text-center">
        This Coffees {coffees.name}
      </h2>

      <div className="flex flex-col items-center p-6 min-h-screen mt-10">
        <div className=" bg-white w-full shadow-lg rounded-lg overflow-hidden">
          <img
            src={coffees.photo}
            alt={coffees.name}
            className="w-full h-[500px] object-cover"
          />
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">{coffees.name}</h1>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Chef:</span> {coffees.chef}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Category:</span>{" "}
              {coffees.category}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Supplier:</span>{" "}
              {coffees.supplier}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Taste:</span> {coffees.taste}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Details:</span> {coffees.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
