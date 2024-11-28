import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const details = useLoaderData();
  return (
    <div className="mt-10">
      <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
        <div className="md:flex items-center">
          <div className="w-full lg:w-11/12 ">
            <img
              className="h-96 w-full object-cover rounded-xl"
              src={details?.photo}
              alt="photo"
            />
          </div>
          <div className="p-8 w-full lg:w-11/12">
            <h2 className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
              {details?.name}
            </h2>
            <p className="mt-1 text-gray-500">Category: {details?.category}</p>
            <p className="mt-1 text-gray-700 font-semibold">
              Price: ${details?.price}
            </p>
            <p className="mt-4 text-gray-600">{details?.details}</p>
            <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
