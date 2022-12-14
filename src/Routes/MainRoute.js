import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import MainLayout from "../Layouts/MainLayout";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyBuyers from "../Pages/Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import MyReportList from "../Pages/Dashboard/MyReportList/MyReportList";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ProductCategory from "../Pages/ProductCategory/ProductCategory";
import Register from "../Pages/Register/Register";
import Reset from "../Pages/Reset/Reset";
import AdminRoute from "./AdminRoute";
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
                path: 'category/:name', element: <PrivetRoute><ProductCategory></ProductCategory></PrivetRoute>,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_API_URL}/category/${params.name}`)
            },
        ]
    },
    {
        path: '/dashboard', element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>, children: [
            { path: '/dashboard', element: <Dashboard></Dashboard> },
            { path: '/dashboard/addProduct', element: <AddProduct></AddProduct> },
            { path: '/dashboard/myProducts', element: <MyProducts></MyProducts> },
            { path: '/dashboard/myBuyers', element: <MyBuyers></MyBuyers> },
            { path: '/dashboard/myOrders', element: <MyOrders></MyOrders> },
            { path: '/dashboard/myReports', element: <MyReportList></MyReportList> },
            { path: '/dashboard/sellers', element: <AdminRoute><AllSellers></AllSellers></AdminRoute> },
            { path: '/dashboard/buyers', element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute> },
            { path: '/dashboard/reportedItems', element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute> },
            {
                path: '/dashboard/payment/:id', element: <Payment></Payment>,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_API_URL}/bookings/${params.id}`)

            },
        ]
    },
])

export default router;