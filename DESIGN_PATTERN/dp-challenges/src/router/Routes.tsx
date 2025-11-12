import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Challenge1 from "../components/Challenge1/Challenge1";

export const Routes: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Challenge1 />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
