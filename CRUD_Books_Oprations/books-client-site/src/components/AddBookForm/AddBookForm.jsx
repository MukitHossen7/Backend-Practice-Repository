const AddBookForm = () => {
  const handleBookForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const author = e.target.author.value;
    const length = e.target.length.value;
    const photo = e.target.photo.value;
    const books = { name, author, length, photo };
    console.log(books);
  };
  return (
    <div className="mt-5 w-full">
      <div className="card bg-base-100 w-full shrink-0 shadow-lg ">
        <form className="card-body" onSubmit={handleBookForm}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Book Name:</span>
            </label>
            <input
              type="text"
              placeholder="Book Name"
              name="name"
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
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Book</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
