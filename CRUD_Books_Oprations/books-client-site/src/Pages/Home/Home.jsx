const Home = () => {
  return (
    <div className="pt-10 flex flex-col justify-center items-center">
      <h2 className="font-bold text-3xl">Home page</h2>
      <div className="card  bg-base-100 w-full max-w-lg shrink-0 shadow-lg">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Book Name:</span>
            </label>
            <input
              type="text"
              placeholder="Book Name"
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
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
