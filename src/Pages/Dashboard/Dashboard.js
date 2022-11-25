import React from 'react';
import Loader from '../../Components/Loader/Loader';
import Spinner from '../../Components/Spinner/Spinner';
import Navbar from '../Shared/Navbar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>


            <Loader></Loader>
            <Spinner></Spinner>
        </div>
    );
};

export default Dashboard;