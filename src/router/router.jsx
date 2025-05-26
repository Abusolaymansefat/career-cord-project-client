import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Homes/Home";
import Register from "../pages/Home/Register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "/register",
            Component: Register
        }
    ]
  },
]);


export default router;