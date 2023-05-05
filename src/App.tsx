import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { homeScreenRoutes } from "./modules/Home/routes.tsx";
import { loginRoutes } from "./modules/Login/routes.tsx";
import { productScreenRoutes } from "./modules/Product/routes.tsx";
import { UseNotification } from "./shared/hooks/useNotification.tsx";

const router = createBrowserRouter([
  ...homeScreenRoutes,
  ...loginRoutes,
  ...productScreenRoutes,
]);

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
