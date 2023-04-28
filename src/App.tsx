import React from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import { loginRoutes } from "./modules/Login/routes.tsx";
import { UseNotification } from "./shared/hooks/useNotification.tsx";

const globalRoutes: RouteObject[] = [
  {
    path: "/",
    element: <div>tela inicial</div>,
    errorElement: <div>página não encontrada</div>,
  },
];

const router = createBrowserRouter([...globalRoutes, ...loginRoutes]);

function App() {
  const { contextHolder } = UseNotification();

  return (
    <React.Fragment>
      {contextHolder}
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
