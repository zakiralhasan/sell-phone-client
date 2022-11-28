import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import swal from 'sweetalert';
import Loader from '../../../Components/Loader/Loader';
import { AuthContext } from '../../../Contexts/AuthProvider';


const MyReportList = () => {
    const { user } = useContext(AuthContext);
    const { data: rportings = [], isLoading, refetch } = useQuery({
        queryKey: ['rportings', user?.email],
        queryFn: () =>
            fetch(`${process.env.REACT_APP_API_URL}/rportings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
    });

    //delete order from the server
    const handleDeleteReport = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this report!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`${process.env.REACT_APP_API_URL}/rportings/${id}`, {
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
                    swal('Your report has been deleted successfully!', {
                        icon: "success",
                    });
                } else {
                    swal("Your report is safe!");
                }
            });
    }

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='mx-5 lg:mx-14 '>
            <div className='text-2xl text-left mt-14 mb-6'>
                <h1 className='text-2xl text-left '>My Report List</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Reporting ID</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {/* <!-- body --> */}
                    <tbody className='text-xs sm:text-base'>
                        {rportings?.map((report, index) => <tr key={report._id}>
                            <th>{index + 1}</th>
                            <td>{report.productName}</td>
                            <td>
                                <p className='text-[#F45510] px-2 py-1 rounded-md text-xs sm:text-base '>{report.reportingID}</p>
                            </td>
                            <td>
                                <button
                                    onClick={() => handleDeleteReport(report._id)}
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

export default MyReportList;