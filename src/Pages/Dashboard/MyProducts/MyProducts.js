import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import Loader from '../../../Components/Loader/Loader';
import { AuthContext } from '../../../Contexts/AuthProvider';


const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: () =>
            fetch(`${process.env.REACT_APP_API_URL}/myProducts?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
    });

    //set product for advertise
    const setProductForAdvertise = id => {
        axios.put(`${process.env.REACT_APP_API_URL}/productAdvertise/${id}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(advertiseData => {
                if (advertiseData.data.acknowledged) {
                    toast.success('Your porduct has been selected for advertise!')
                    refetch()
                }
            })
            .catch(error => console.log(error))
    }

    //delete product from my porduct list
    const handleDeletProduct = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`${process.env.REACT_APP_API_URL}/products/${id}`, {
                        headers: {
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                    })
                        .then(advertiseData => {
                            if (advertiseData.data.acknowledged) {
                                refetch()
                            }
                        })
                        .catch(error => console.log(error))
                    swal('Your porduct has been deleted successfully!', {
                        icon: "success",
                    });
                } else {
                    swal("Your product is safe!");
                }
            });

    }

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='mx-5 lg:mx-14 '>
            <div className='text-2xl text-left mt-14 mb-6'>
                <h1 className='text-2xl text-left '>My Products</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Adverise</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {/* <!-- body --> */}
                    <tbody className='text-xs sm:text-base'>
                        {myProducts?.map((product, index) => <tr key={product._id}>
                            <th>{index + 1}</th>
                            <td>{product.productName}</td>
                            <td>${parseFloat(product.resellPrice)}</td>
                            <td>
                                <button
                                    onClick={() => setProductForAdvertise(product._id)}
                                    disabled={product?.advertise}
                                    className='bg-[#F45510] px-2 py-1 rounded-md text-white text-xs sm:text-base '
                                >Set advertise</button>
                            </td>
                            <td>
                                {
                                    product?.payment ? <p className='text-green-500 px-2 py-1 rounded-md  text-xs sm:text-base w-20'>Sold</p> : <p className='text-[#F45510] px-2 py-1 rounded-md text-xs sm:text-base w-20'>Available</p>

                                }
                            </td>
                            <td>
                                <button
                                    onClick={() => handleDeletProduct(product._id)}
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

export default MyProducts;