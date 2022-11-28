import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import swal from 'sweetalert';
import Loader from '../../../Components/Loader/Loader';
import { AuthContext } from '../../../Contexts/AuthProvider';


const AllBuyers = () => {
    const { user } = useContext(AuthContext);
    const { data: myBuyers = [], isLoading, refetch } = useQuery({
        queryKey: ['myBuyers'],
        queryFn: () =>
            fetch(`${process.env.REACT_APP_API_URL}/users/buyer`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
    });


    //delete seller from the server
    const handleDeletBuyer = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this buyer!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`${process.env.REACT_APP_API_URL}/buyer/${id}`, {
                        headers: {
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                    })
                        .then(sellerData => {
                            if (sellerData.data.acknowledged) {
                                refetch()
                            }
                        })
                        .catch(error => console.log(error))
                    swal('Buyer has been deleted successfully!', {
                        icon: "success",
                    });
                } else {
                    swal("Buyer is safe!");
                }
            });
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {/* <!-- body --> */}
                    <tbody className='text-xs sm:text-base'>
                        {myBuyers?.map((buyer, index) => <tr key={buyer._id}>
                            <th>{index + 1}</th>
                            <td>{buyer.name}</td>
                            <td>{buyer.email}</td>
                            <td>
                                <button
                                    onClick={() => handleDeletBuyer(buyer._id)}
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

export default AllBuyers;