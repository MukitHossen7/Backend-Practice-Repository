import { useContext } from "react";
import CoffeeCard from "../components/CoffeeCard/CoffeeCard";
import { CoffeeContext } from "../Provider/ApiProvider";

const Home = () => {
  const { coffees } = useContext(CoffeeContext);
  return (
    <div>
      <h2 className="font-semibold text-2xl mt-3 text-center">
        Our Coffee Card: {coffees.length}
      </h2>
      <div className="mt-12">
        <CoffeeCard></CoffeeCard>
      </div>
    </div>
  );
};

export default Home;
