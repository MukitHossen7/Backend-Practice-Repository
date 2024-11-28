import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import HomePages from "../Pages/HomePages/HomePages";
import AddFood from "../Pages/AddFood/AddFood";
import EditFood from "../Pages/EditFood/EditFood";

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
    ],
  },
]);
export default router;
