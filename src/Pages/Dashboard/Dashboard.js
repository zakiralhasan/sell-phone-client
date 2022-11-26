import React from 'react';
import CommonButton from '../../Components/CommonButton/CommonButton';
import Loader from '../../Components/Loader/Loader';
import Spinner from '../../Components/Spinner/Spinner';

const Dashboard = () => {
    return (
        <div>


            <Loader></Loader>
            <Spinner></Spinner>

            <br />
            <br />
            <br />
            <CommonButton design={`px-10 py-2 text-white rounded-md`}
            >Submit</CommonButton>
        </div>
    );
};

export default Dashboard;