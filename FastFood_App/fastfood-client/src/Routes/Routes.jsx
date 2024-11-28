import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import HomePages from "../Pages/HomePages/HomePages";
import AddFood from "../Pages/AddFood/AddFood";

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
    ],
  },
]);
export default router;
