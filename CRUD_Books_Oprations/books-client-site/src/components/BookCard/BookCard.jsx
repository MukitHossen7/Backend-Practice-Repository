import { useContext } from "react";
import { BookContext } from "../../Providers/ApiProvider";

const BookCard = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7 mt-10">
      {books.map((book) => (
        <div
          key={book._id}
          className="rounded w-full max-w-full  shadow-lg bg-white border border-gray-200"
        >
          <img
            className="w-full h-48 object-cover"
            src={book.photo}
            alt={book.name}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-800">
              {book.name}
            </div>
            <p className="text-gray-700 text-base">
              <strong>Author:</strong> {book.author}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Length:</strong> {book.length}
            </p>
          </div>
          <div className="px-6 py-4 flex gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
              Update
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
