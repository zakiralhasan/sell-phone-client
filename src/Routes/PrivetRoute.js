import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import { AuthContext } from "../Contexts/AuthProvider";



const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    //waiting for getting user data
    if (loading) {
        return <Loader />
    }

    //access for valid user only
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;