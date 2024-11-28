import { useContext } from "react";
import { FoodContext } from "../../Provider/ApiProvider";

const FoodCard = () => {
  const { foods } = useContext(FoodContext);

  return (
    <div className="mt-10">
      <h2 className="font-semibold text-3xl text-center">
        Our Fast_Foods Items {foods.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
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
