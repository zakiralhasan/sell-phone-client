import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import MainLayout from "../Layouts/MainLayout";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ProductCategory from "../Pages/ProductCategory/ProductCategory";
import Register from "../Pages/Register/Register";
import Reset from "../Pages/Reset/Reset";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout></MainLayout>, errorElement: <ErrorPage></ErrorPage>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/blog', element: <Blog></Blog> },
            { path: 'register', element: <Register></Register> },
            { path: 'login', element: <Login></Login> },
            { path: 'reset', element: <Reset></Reset> },
            {
                path: 'category/:name', element: <ProductCategory></ProductCategory>,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_API_URL}/category/${params.name}`)
            },
        ]
    },
    {
        path: '/dashboard', element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>, children: [
            { path: '/dashboard', element: <Dashboard></Dashboard> },
            { path: '/dashboard/addProduct', element: <AddProduct></AddProduct> },
            { path: '/dashboard/myProducts', element: <MyProducts></MyProducts> },
            { path: '/dashboard/sellers', element: <AllSellers></AllSellers> },
            { path: '/dashboard/buyers', element: <AllBuyers></AllBuyers> },
            { path: '/dashboard/myOrders', element: <MyOrders></MyOrders> },
        ]
    },
])

export default router;