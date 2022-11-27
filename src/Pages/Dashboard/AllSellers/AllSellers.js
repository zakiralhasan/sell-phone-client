import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import Loader from '../../../Components/Loader/Loader';
import { AuthContext } from '../../../Contexts/AuthProvider';


const AllSellers = () => {
    const { user } = useContext(AuthContext);
    const { data: mySellers = [], isLoading, refetch } = useQuery({
        queryKey: ['mySellers'],
        queryFn: () =>
            fetch(`${process.env.REACT_APP_API_URL}/users/seller`)
                .then(res => res.json())
    });

    //handle verify seller
    const handleVerifiedSeller = email => {
        axios.put(`${process.env.REACT_APP_API_URL}/seller?email=${email}`, {
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        }
        )
            .then(verifiedData => {
                console.log(verifiedData)
                if (verifiedData.data.result.acknowledged && verifiedData.data.verifiedSeller.acknowledged) {
                    toast.success('Seller has been verified!')
                    refetch()
                }
            })
            .catch(error => console.log(error))
    }

    //delete seller from the server
    const handleDeletSeller = id => {
        axios.delete(`${process.env.REACT_APP_API_URL}/seller/${id}`, {
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(sellerData => {
                if (sellerData.data.acknowledged) {
                    toast.success('Seller has been deleted successfully!')
                    refetch()
                }
            })
            .catch(error => console.log(error))
    }

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
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {/* <!-- body --> */}
                    <tbody className='text-xs sm:text-base'>
                        {mySellers?.map((seller, index) => <tr key={seller._id}>
                            <th>{index + 1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td>
                                {
                                    seller?.verified ? <button className='text-green-500 px-2 py-1 rounded-md  text-xs sm:text-base w-20'>Verified</button> : <button onClick={() => handleVerifiedSeller(seller.email)} className='bg-[#2CBBD5] text-white px-2 py-1 rounded-md text-xs sm:text-base w-20'>Verify</button>

                                }
                            </td>
                            <td>
                                <button
                                    onClick={() => handleDeletSeller(seller._id)}
                                    className='bg-[#F45510] px-2 py-1 rounded-md text-white text-xs sm:text-base '
                                >Delete</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllSellers;