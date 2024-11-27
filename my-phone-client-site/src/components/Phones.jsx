import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
  const phones = useLoaderData();
  console.log(phones);
  return (
    <div>
      <h2>All Phones Data</h2>
      {phones.map((phone) => (
        <Link key={phone.id}>{phone.name}</Link>
      ))}
    </div>
  );
};

export default Phones;
