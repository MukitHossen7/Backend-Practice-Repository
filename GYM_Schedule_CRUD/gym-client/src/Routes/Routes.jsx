import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AddSchedule from "../Pages/AddSchedule/AddSchedule";
import AllScedule from "../Pages/AllScedule/AllScedule";
import UpdateSchedule from "../Pages/UpdataSchedule/UpdateSchedule";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addSchedule",
        element: <AddSchedule></AddSchedule>,
      },
      {
        path: "/allSchedule",
        element: <AllScedule></AllScedule>,
        loader: () => fetch("http://localhost:5000/schedules"),
      },
      {
        path: "/updateSchedule/:id",
        element: <UpdateSchedule></UpdateSchedule>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/schedules/${params.id}`),
      },
    ],
  },
]);
export default router;
