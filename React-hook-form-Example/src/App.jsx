import { useForm } from "react-hook-form";
const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    const { email, password } = data;
    console.log(email, password);
  };
  return (
    <div className="w-11/12 mx-auto h-screen mt-10">
      <h2 className="text-3xl text-center">Login Form</h2>
      <form
        className="card-body max-w-xl shadow-lg mx-auto"
        onSubmit={handleSubmit(handleLogin)}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            placeholder="email"
            className="input input-bordered"
          />
          {
            <span className="text-red-500 text-xs font-semibold mt-1">
              {errors.email?.message}
            </span>
          }
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
            placeholder="password"
            className="input input-bordered"
          />
          {
            <span className="text-red-500 text-xs font-semibold mt-1">
              {errors.password?.message}
            </span>
          }
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default App;
