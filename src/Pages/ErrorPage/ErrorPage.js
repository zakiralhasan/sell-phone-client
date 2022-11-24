import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen">
            <div className="bg-gray-50 shadow-lg p-6 text-center rounded-md">
                <div className="flex justify-center items-center">
                    <h1 className="text-6xl mb-4 text-red-500 ">Oops</h1>
                    <h1 className="text-6xl mb-4 text-red-500 animate-bounce">!</h1>
                </div>
                <h4>An unexpected error has occurred.</h4>
                <div className="text-gray-400 ">
                    <p className="text-2xl">{error.status}</p>
                    <small>{error.statusText}</small>
                </div>
                <Link to="/">
                    <button className="bg-[#F45510] px-4 py-2 rounded font-semibold text-white mt-4">
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;