import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import ApiProvider from "./Provider/ApiProvider.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApiProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ApiProvider>
  </StrictMode>
);
