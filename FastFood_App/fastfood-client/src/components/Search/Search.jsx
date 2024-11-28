const Search = () => {
  return (
    <div className="flex justify-between items-center mt-7">
      <h3 className="font-semibold text-xl">Search your FAST_Food category</h3>
      <div>
        <form className="flex flex-row">
          <input
            type="text"
            placeholder="Search category..."
            className="w-full px-3 py-2 rounded-md text-sm bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          />
          <button
            type="submit"
            className="ml-3 text-white font-medium py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
