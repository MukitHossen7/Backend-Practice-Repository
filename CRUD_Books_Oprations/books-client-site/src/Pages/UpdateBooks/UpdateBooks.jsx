import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { BookContext } from "../../Providers/ApiProvider";

const UpdateBooks = () => {
  const { setBooks } = useContext(BookContext);
  const booksData = useLoaderData();
  const handleUpdateForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const author = e.target.author.value;
    const length = e.target.length.value;
    const photo = e.target.photo.value;
    const updateBooks = {
      name,
      author,
      length,
      photo,
    };

    fetch(`http://localhost:5000/books/${booksData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateBooks),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setBooks(data);
          Swal.fire({
            title: "Book Updated Successfully!",
            icon: "success",
          });
          window.location.href = "/";
        }
      });
  };
  return (
    <div className="mt-7">
      <h2 className="font-semibold text-3xl text-center">Update your books </h2>
      <div className="mt-5 w-full">
        <div className="card bg-base-100 w-full shrink-0 shadow-lg ">
          <form className="card-body" onSubmit={handleUpdateForm}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Book Name:</span>
              </label>
              <input
                type="text"
                placeholder="Book Name"
                name="name"
                defaultValue={booksData.name}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Author:</span>
              </label>
              <input
                type="text"
                placeholder="Author Name"
                name="author"
                defaultValue={booksData.author}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Book Length</span>
              </label>
              <input
                type="number"
                placeholder="Book length"
                name="length"
                defaultValue={booksData.length}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Book Photo</span>
              </label>
              <input
                type="text"
                placeholder="book photo"
                name="photo"
                defaultValue={booksData.photo}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update Books</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBooks;
