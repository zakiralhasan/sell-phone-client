import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout></MainLayout>, children: [
            { path: '/', element: <Home></Home> },
            { path: 'register', element: <Register></Register> },
            { path: 'login', element: <Login></Login> },
        ]
    }
])

export default router;