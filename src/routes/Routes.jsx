import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Service from "../pages/Service/Service";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`./yoga.json`)
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><Service></Service></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>  
            }
        ]
    }
])

export default router;