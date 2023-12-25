import { RouterProvider } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import NoLayout from "../layouts/NoHeaderLayout";
import Layout from "../layouts/Layout";
import WithJoy from "../layouts/WithJoy";

// Pages
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Sink from "../pages/Sink";
import Spaces from "../pages/github-spaces/Spaces";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <WithJoy />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            index: true,
            path: "/",
            element: <Home />,
          },
          {
            path: "/sink",
            element: <Sink />,
          },
        ],
      },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    element: <NoLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/spaces",
        element: <Spaces />,
      },
    ],
  },
]);



function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
