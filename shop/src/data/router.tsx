import { Navigate, RouteObject } from "react-router";
import { HomePage } from "../pages/homePage";

const routes: RouteObject[] = [
    {
    path: "/",
    element: <HomePage />,
  },
];

export default routes;