/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const CoffeeContext = createContext();
const ApiProvider = ({ children }) => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const fetchCoffees = async () => {
      const response = await fetch(
        "https://coffee-store-server-six-mu.vercel.app/coffee"
      );
      const data = await response.json();
      setCoffees(data);
    };
    fetchCoffees();
  }, [coffees]);
  const coffeeData = {
    coffees,
    setCoffees,
  };
  return (
    <CoffeeContext.Provider value={coffeeData}>
      {children}
    </CoffeeContext.Provider>
  );
};

export default ApiProvider;
