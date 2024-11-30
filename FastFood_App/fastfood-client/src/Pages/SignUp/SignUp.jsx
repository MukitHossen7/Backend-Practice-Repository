import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../../Provider/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createNewUser } = useContext(AuthContext);
  const handleSignUpForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);
    createNewUser(email, password)
      .then((result) => {
        e.target.reset();
        toast.success("Successfully signed up");
        console.log("User created successfully", result);
      })
      .catch((error) => {
        console.error("Error creating user", error);
        toast.error("Already use this email");
      });
  };
  return (
    <div className="mt-12">
      <div className="card bg-base-100 w-full mx-auto max-w-xl shrink-0 shadow-2xl">
        <h2 className="font-semibold text-3xl text-center pt-7">SignUp Form</h2>
        <form className="card-body" onSubmit={handleSignUpForm}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
            <button className="btn btn-primary">SignUp</button>
          </div>
        </form>

        <p className="text-center pb-5 font-medium">
          Already have account? Please{" "}
          <Link to="/login">
            <span className="text-red-500 underline">LogIn</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
