/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const FoodContext = createContext();
const ApiProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const foodAsync = async () => {
      const response = await fetch("http://localhost:5000/foods");
      const data = await response.json();
      setFoods(data);
    };
    foodAsync();
  }, [foods]);
  const foodData = {
    foods,
    setFoods,
  };
  return (
    <FoodContext.Provider value={foodData}>{children}</FoodContext.Provider>
  );
};

export default ApiProvider;
