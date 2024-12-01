/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const FoodContext = createContext();
const ApiProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);
  const [categoryFoods, setCategoryFoods] = useState(null);
  useEffect(() => {
    const foodAsync = async () => {
      const response = await fetch("https://fastfood-server.vercel.app/foods");
      const data = await response.json();
      setFoods(data);
    };
    foodAsync();
  }, [foods]);
  const foodData = {
    foods,
    setFoods,
    categoryFoods,
    setCategoryFoods,
  };
  return (
    <FoodContext.Provider value={foodData}>{children}</FoodContext.Provider>
  );
};

export default ApiProvider;
