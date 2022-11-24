import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Reset from "../Pages/Reset/Reset";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout></MainLayout>, errorElement: <ErrorPage></ErrorPage>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/blog', element: <Blog></Blog> },
            { path: 'register', element: <Register></Register> },
            { path: 'login', element: <Login></Login> },
            { path: 'reset', element: <Reset></Reset> },
        ]
    }
])

export default router;