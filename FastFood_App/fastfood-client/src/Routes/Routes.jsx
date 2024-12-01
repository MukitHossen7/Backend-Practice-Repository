import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import HomePages from "../Pages/HomePages/HomePages";
import AddFood from "../Pages/AddFood/AddFood";
import EditFood from "../Pages/EditFood/EditFood";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import CategoryFood from "../Pages/CategoryFood/CategoryFood";
import LogInPage from "../Pages/LogInPage/LogInPage";
import SignUp from "../Pages/SignUp/SignUp";
import Users from "../Pages/Users/Users";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <HomePages></HomePages>,
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/editFood/:id",
        element: <EditFood></EditFood>,
        loader: ({ params }) =>
          fetch(`https://fastfood-server.vercel.app/foods/${params.id}`),
      },
      {
        path: "/foodDetails/:id",
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) =>
          fetch(`https://fastfood-server.vercel.app/foods/${params.id}`),
      },
      {
        path: "/categoryFood/:foodID",
        element: <CategoryFood></CategoryFood>,
      },
      {
        path: "/login",
        element: <LogInPage></LogInPage>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/users",
        element: (
          <PrivateRoute>
            <Users></Users>
          </PrivateRoute>
        ),
        loader: () => fetch("https://fastfood-server.vercel.app/users"),
      },
    ],
  },
]);
export default router;
