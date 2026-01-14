import { Navigate, RouteObject } from "react-router";
import { HomePage } from "../pages/homePage";
import { CheckoutPage } from "../pages/checkoutPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
];

export default routes;