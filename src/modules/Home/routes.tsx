import { RouteObject } from "react-router-dom";

import HomeScreen from "./screens";

export const homeScreenRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <div>página não encontrada</div>,
  },
];
