import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouteObject } from "react-router-dom";

import { homeScreenRoutes } from "./modules/Home/routes.tsx";
import { loginRoutes } from "./modules/Login/routes.tsx";
import { productScreenRoutes } from "./modules/Product/routes.tsx";
import { AUTORIZATION_KEY } from "./shared/constants/autorization.ts";
import { UseNotification } from "./shared/hooks/useNotification.tsx";

function App() {
  const { contextHolder } = UseNotification();

  const routes: RouteObject[] = [...homeScreenRoutes, ...loginRoutes];
  const routesLoggedIn: RouteObject[] = [...productScreenRoutes].map(
    (route) => ({
      ...route,
      loader: () => {
        const token = localStorage.getItem(AUTORIZATION_KEY);
        if (!token) {
          location.href = "/login";
        } else {
          /*
            todo
            - getCurrentUser() 
            - user ? save user in context : ...
            - 
          */
          localStorage.removeItem(AUTORIZATION_KEY);
        }
        return null;
      },
    })
  );

  const router = createBrowserRouter([...routes, ...routesLoggedIn]);

  return (
    <React.Fragment>
      {contextHolder}
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
