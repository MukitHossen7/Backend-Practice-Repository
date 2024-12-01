import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const LogInPage = () => {
  const { logInUser, user } = useContext(AuthContext);
  if (user) {
    return <Navigate to="/"></Navigate>;
  }
  const handleLogInForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    logInUser(email, password)
      .then((result) => {
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const newLogin = { email, lastSignInTime };
        fetch("http://localhost:5000/users", {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newLogin),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        e.target.reset();
        toast.success("Successfully logged in");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Invalid credentials email/password");
      });
  };
  return (
    <div className="mt-12">
      <div className="card bg-base-100 w-full mx-auto max-w-lg shrink-0 shadow-2xl">
        <h2 className="font-semibold text-3xl text-center pt-7">Login Form</h2>
        <form className="card-body" onSubmit={handleLogInForm}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">LogIn</button>
          </div>
        </form>
        <p className="text-center pb-5 font-medium">
          Dont have account? Please{" "}
          <Link to="/signUp">
            <span className="text-red-500 underline">SignUp</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;
