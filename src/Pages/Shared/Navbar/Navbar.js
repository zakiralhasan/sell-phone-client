import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)

    //logout user
    const handleUserLogout = () => {
        logOutUser()
            .then(() => {

            })
            .catch((error) => console.error(error));
    }

    const navItems = (
        <>
            <li>
                <NavLink className={({ isActive }) =>
                    isActive ? `text-[#F45510]` : `hover:text-[#F45510]`
                } to="/home">Home</NavLink >
            </li>
            <li>
                <NavLink className={({ isActive }) =>
                    isActive ? `text-[#F45510]` : `hover:text-[#F45510]`
                } to="/blog">Blog</NavLink >
            </li>
            <li>
                <NavLink className={({ isActive }) =>
                    isActive ? `text-[#F45510]` : `hover:text-[#F45510]`
                } to="/dashboard">Dahsboard</NavLink >
            </li>
        </>
    );
    return (
        <div>
            <div className="navbar bg-gray-600">
                <div className="navbar-start ">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost md:hidden ">
                            <GiHamburgerMenu className="text-xl text-white" />
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded w-52"
                        >
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" className=" normal-case text-xl sm:mr-4">
                        <h1 className="text-[#2CBBD5] font-medium">Sell Phone</h1>
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="hidden md:flex text-white">
                        <ul className="menu menu-horizontal p-0">{navItems}</ul>
                    </div>
                    <div className="">
                        {user?.uid ? (
                            <div className="flex items-center sm:ml-8 text-white">
                                <button
                                    onClick={handleUserLogout}
                                    className="btn-ghost px-3 sm:px-5 py-2"
                                >
                                    Logout
                                </button>
                                <div className="w-8 rounded-full ml-2">
                                    <img className="rounded-full " src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/rp0mZgF/backup-profile-pic.jpg'} alt="" title="" />
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center sm:ml-8 text-white">
                                <Link to="/login">
                                    <button className="btn-ghost px-3 sm:px-5 py-2 ">
                                        Login
                                    </button>
                                </Link>
                                <FaUserAlt className="ml-1" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;