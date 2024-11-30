import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import From from "../components/From/From";
import Update from "../Pages/Update/Update";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Users from "../Pages/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addCoffee",
        element: <From></From>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
      },
      {
        path: "/details/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-six-mu.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "users",
        element: <Users></Users>,
        loader: () =>
          fetch("https://coffee-store-server-six-mu.vercel.app/users"),
      },
    ],
  },
]);
export default router;
