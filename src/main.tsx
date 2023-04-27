import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import { loginRoutes } from "./modules/Login/routes.tsx";

const globalRoutes: RouteObject[] = [
  {
    path: "/",
    element: <div>tela inicial</div>,
    errorElement: <div>página não encontrada</div>,
  },
];

const router = createBrowserRouter([...globalRoutes, ...loginRoutes]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
