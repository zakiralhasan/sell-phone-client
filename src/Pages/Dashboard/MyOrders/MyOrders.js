import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import Loader from '../../../Components/Loader/Loader';
import { AuthContext } from '../../../Contexts/AuthProvider';


const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: myOrders = [], isLoading, refetch } = useQuery({
        queryKey: ['myOrders', user?.email],
        queryFn: () =>
            fetch(`${process.env.REACT_APP_API_URL}/myOrders?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .catch(error => console.loge(error))
    });

    //delete order from the server
    const handleDeletOrder = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this order!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`${process.env.REACT_APP_API_URL}/myOrders/${id}`, {
                        headers: {
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(sellerData => {
                            if (sellerData.data.acknowledged) {
                                refetch()
                            }
                        })
                        .catch(error => console.log(error))
                    swal('Your order has been deleted successfully!', {
                        icon: "success",
                    });
                } else {
                    swal("Your order is safe!");
                }
            });
    }

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='mx-5 lg:mx-14 '>
            <div className='text-2xl text-left mt-14 mb-6'>
                <h1 className='text-2xl text-left '>My Order List</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {/* <!-- body --> */}
                    <tbody className='text-xs sm:text-base'>
                        {myOrders?.map((order, index) => <tr key={order._id}>
                            <th>{index + 1}</th>
                            <td>{order.productName}</td>
                            <td>
                                {
                                    order?.payment ? <button className='text-green-500 px-2 py-1 rounded-md  text-xs sm:text-base w-20'>Paid</button> :
                                        <Link to={`/dashboard/payment/${order._id}`}>
                                            <button className='bg-[#2CBBD5] text-white px-2 py-1 rounded-md text-xs sm:text-base w-20'>Pay</button>
                                        </Link>

                                }
                            </td>
                            <td>
                                <button
                                    onClick={() => handleDeletOrder(order._id)}
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

export default MyOrders;