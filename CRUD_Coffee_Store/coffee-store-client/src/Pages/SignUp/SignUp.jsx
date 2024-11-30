import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    createUser(email, password)
      .then((result) => {
        const creationTime = result?.user?.metadata?.creationTime;
        const newUser = { name, email, photo, creationTime };
        fetch("https://coffee-store-server-six-mu.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((response) => response.json())
          .then((data) => {
            e.target.reset();
            console.log(data);
          });
        if (result.user) {
          toast.success("Sign Up Successfully");
        }
      })
      .catch((error) => {
        console.error("Error creating user", error);
        toast.error("Already use this email");
      });
  };
  return (
    <div className="mt-12">
      <div className="card bg-base-100 w-full mx-auto max-w-xl shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSignUp}>
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
      </div>
    </div>
  );
};

export default SignUp;
