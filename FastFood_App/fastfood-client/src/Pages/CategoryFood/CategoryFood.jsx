import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryFood = () => {
  const { foodID } = useParams();
  const [catFoods, setCatFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/foods/category/${foodID}`)
      .then((response) => response.json())
      .then((data) => setCatFoods(data));
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-medium text-center">Category Fast Food</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {catFoods?.map((categoryFood) => (
          <div
            key={categoryFood._id}
            className=" rounded overflow-hidden shadow-md bg-white"
          >
            <img
              className="w-full h-48 object-cover"
              src={categoryFood?.photo}
              alt="images"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{categoryFood?.name}</div>
              <p className="text-gray-700 text-base">{categoryFood?.details}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  #{categoryFood?.category}
                </span>
                <span className="text-lg font-bold text-green-500">
                  ${categoryFood?.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFood;
