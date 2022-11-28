import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import { AuthContext } from "../Contexts/AuthProvider";

import useUserRole from "../Hooks/UseUserRole";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [userRole] = useUserRole(user?.email)
    const location = useLocation();

    //waiting for getting user with admin's data
    if (loading) {
        return <Loader />
    }

    //access for valid user with admin only
    if (user && userRole === 'Admin') {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;