import { BrowserRouter, useRoutes } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";


function AppRoutes() {
  let routes = useRoutes([
    {
      path: "/",
      element: <BaseLayout />,
      children: [],
    },
   
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "sign-up",
          element: <Signup />,
        },
      ],
    },
    // {
    //   path: "*",
    //   element: <Page404 />,
    // },
  ]);

  return routes;
}

export default function Router() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
