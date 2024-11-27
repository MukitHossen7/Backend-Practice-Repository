import { useContext } from "react";
import { BookContext } from "../../Providers/ApiProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const BookCard = () => {
  const { books, setBooks } = useContext(BookContext);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/books/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const updatedBooks = books.filter((book) => book._id !== id);
              setBooks(updatedBooks);
              Swal.fire({
                title: "Deleted!",
                text: "Successfully deleted book items.",
                icon: "success",
              });
            }
          });
      }
    });
  };
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
            <Link
              to={`/updateBook/${book._id}`}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Update
            </Link>
            <button
              onClick={() => handleDelete(book._id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
