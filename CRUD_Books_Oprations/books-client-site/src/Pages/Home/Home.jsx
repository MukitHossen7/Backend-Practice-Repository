import BookCard from "../../components/BookCard/BookCard";

const Home = () => {
  return (
    <div className="pt-10 flex flex-col justify-center items-center">
      <h2 className="font-bold text-3xl">Our Book House</h2>
      <BookCard></BookCard>
    </div>
  );
};

export default Home;
