import { createBrowserRouter } from "react-router-dom";
import Employees from "../pages/employees/Employees";
import Home from "../pages/home/Home";
import RootLayout from "../pages/root/Root";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/employees", element: <Employees /> },
    ],
  },
]);