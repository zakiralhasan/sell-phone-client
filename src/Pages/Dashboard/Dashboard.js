import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import useUserRole from '../../Hooks/UseUserRole';


const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [userRole] = useUserRole(user.email)
    return (
        <div>
            <div className='w-10/12 mx-auto mt-32'>
                <div className=' flex justify-center items-center'>
                    <h1 className='text-[#2CBBD5] sm:text-8xl text-5xl'>Welc</h1>
                    <div className='mt-4 sm:mt-8 w-8 h-8 sm:w-12 sm:h-12 border-dashed border-4 sm:border-8 border-[#F45510] rounded-full animate-spin'></div>
                    <h1 className='text-[#2CBBD5] sm:text-8xl text-5xl'>me</h1>
                </div>
                <h1 className='font-semibold text-xl'>To</h1>
                <h1 className='text-3xl text-[#F45510]'>{userRole} dashboard</h1>
            </div>
        </div>
    );
};

export default Dashboard;