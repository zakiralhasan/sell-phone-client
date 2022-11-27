import React, { useContext } from 'react';

import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useUserRole from '../Hooks/UseUserRole';
import Navbar from '../Pages/Shared/Navbar/Navbar';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [userRole] = useUserRole(user?.email)
    return (
        <div className="max-w-[1440px] mx-auto ">
            <Navbar></Navbar>
            <div className="bg-gray-100 drawer drawer-mobile">
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

                                {
                                    userRole === 'Buyer' &&
                                    <div>
                                        <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                                        <li><Link to='/dashboard/myReports'>My Report List</Link></li>
                                    </div>

                                }

                                {
                                    userRole === 'Seller' &&
                                    <div>
                                        <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                                        <li><Link to='/dashboard/addProduct'>Add New Product</Link></li>
                                    </div>
                                }
                                {
                                    userRole === 'Admin' &&
                                    <div>
                                        <li><Link to='/dashboard/sellers'>All Sellers</Link></li>
                                        <li><Link to='/dashboard/buyers'>All Buyers</Link></li>
                                        <li><Link to='/dashboard/reportedItems'>All Reported Items</Link></li>
                                    </div>
                                }

                            </div>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;