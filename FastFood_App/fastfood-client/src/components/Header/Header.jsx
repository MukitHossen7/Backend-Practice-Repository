import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import toast from "react-hot-toast";

const Header = () => {
  const { user } = useContext(AuthContext);
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Successfully Log Out");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to Log Out");
      });
  };
  return (
    <div className="navbar bg-base-100 mt-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-5 font-medium"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/addFood">Add Food</NavLink>
            <NavLink to="/users">Users</NavLink>
          </ul>
        </div>

        <Link to="/" className=" text-2xl font-semibold">
          FAST_Food
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10 font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/addFood">Add Food</NavLink>
          <NavLink to="/users">Users</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleLogOut} className="btn">
            LogOut
          </button>
        ) : (
          <Link to="/login" className="btn">
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
