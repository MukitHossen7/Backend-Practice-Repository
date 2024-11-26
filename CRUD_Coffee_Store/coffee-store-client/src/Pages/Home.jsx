import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard/CoffeeCard";

const Home = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <h2 className="font-semibold text-2xl mt-3 text-center">
        Our Coffee Card: {coffees.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
