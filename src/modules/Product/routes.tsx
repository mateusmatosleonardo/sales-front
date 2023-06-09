import { RouteObject } from "react-router-dom";

import ProductScreen from "./screens";

export enum ProductRoutesEnum {
  PRODUCT = "/product",
}

export const productScreenRoutes: RouteObject[] = [
  {
    path: ProductRoutesEnum.PRODUCT,
    element: <ProductScreen />,
    errorElement: <div>página não encontrada</div>,
  },
];
