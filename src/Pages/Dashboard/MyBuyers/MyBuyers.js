import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import Loader from '../../../Components/Loader/Loader';
import { AuthContext } from '../../../Contexts/AuthProvider';


const MyBuyers = () => {
    const { user } = useContext(AuthContext);
    const { data: myBuyers = [], isLoading, refetch } = useQuery({
        queryKey: ['myBuyers'],
        queryFn: () =>
            fetch(`${process.env.REACT_APP_API_URL}/myBuyers?email=${user?.email}`, {
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
    });


    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='mx-5 lg:mx-14 '>
            <div className='text-2xl text-left mt-14 mb-6'>
                <h1 className='text-2xl text-left '>All Sellers</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    {/* <!-- body --> */}
                    <tbody className='text-xs sm:text-base'>
                        {myBuyers?.map((myBuyer, index) => <tr key={myBuyer._id}>
                            <th>{index + 1}</th>
                            <td>{myBuyer.buyerName}</td>
                            <td>{myBuyer.buyerEmail}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyBuyers;