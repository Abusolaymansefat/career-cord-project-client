import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Homes/Home";
import Register from "../pages/Home/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
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
          path: '/jobs/:id',
          Component: JobDetails
        },
        {
            path: "register",
            Component: Register
        },
        {
          path: "signin",
          Component: SignIn
        }
    ]
  },
]);


export default router;