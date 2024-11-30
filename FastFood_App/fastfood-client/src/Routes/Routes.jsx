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
        element: <AddFood></AddFood>,
      },
      {
        path: "/editFood/:id",
        element: <EditFood></EditFood>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
      },
      {
        path: "/foodDetails/:id",
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
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
        element: <Users></Users>,
        loader: () => fetch("http://localhost:5000/users"),
      },
    ],
  },
]);
export default router;
