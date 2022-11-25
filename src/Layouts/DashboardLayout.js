import React, { useContext } from 'react';

import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="max-w-[1440px] mx-auto ">
            <Navbar></Navbar>
            <div className="bg-[#F1F5F9] drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    {/* <!-- Page content here --> */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        {
                            <div>
                                <li><Link to='/dashboard/users'>All Users</Link></li>
                                <li><Link to='/dashboard/addProduct'>Add New Product</Link></li>
                            </div>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;