import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import BookingModal from '../../Components/BookingModal/BookingModal';
import ProductDetailsModal from '../../Components/ProductDetailsModal/ProductDetailsModal';
import ReportingModal from '../../Components/ReportingModal/ReportingModal';

const ProductCategory = () => {
    const [productDetails, setProductDetails] = useState('')
    const [closeBookingModal, setCloseBookingModal] = useState(true)

    const products = useLoaderData() // called use loader from react

    //store booking data to the server
    const handleBooking = bokingInfo => {
        axios.post(`${process.env.REACT_APP_API_URL}/bookings`, bokingInfo)
            .then(bookingData => {
                console.log(bookingData)
                if (bookingData.data.acknowledged) {
                    toast.success('Booking successfull!')
                }
                toast.warning(bookingData.data.message)
            })
            .catch(error => console.log(error))
            .finally(() => setCloseBookingModal(true))
    }

    //store reporting data to the server
    const handleReporting = reportingInfo => {
        axios.post(`${process.env.REACT_APP_API_URL}/rportings`, reportingInfo)
            .then(reportedData => {
                console.log(reportedData)
                if (reportedData.data.acknowledged) {
                    toast.success('Reporting successfull!')
                }
                toast.warning(reportedData.data.message)
            })
            .catch(error => console.log(error))
            .finally(() => setCloseBookingModal(true))
    }


    return (
        <div className='w-11/12 mx-auto my-5'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
                {
                    products?.map(product => <div
                        key={product._id}
                    >
                        <div className="p-2 mx-auto max-w-[24rem] bg-base-100 shadow-md rounded-md">
                            <img className='max-h-[15rem] min-h-[10rem] w-full ' src={product.productImg} alt="Shoes" />
                            <div className="my-2 ">
                                <div className='flex justify-between items-center'>
                                    <h2 className="card-title">{product.productName}</h2>
                                    <small><span className='font-medium'>Posted:</span>{product.postedTime}</small>
                                </div>
                                <div className='my-2 grid grid-cols-2 gap- text-left'>
                                    <p>Resell Price: ${product.resellPrice}</p>
                                    <p>Original Price: ${product.originalPrice}</p>
                                    <p>Condition: {product.condition}</p>
                                    <p>Used time: {product.usedTime}</p>
                                    <p>Location: {product.sellerLocation}</p>
                                </div>

                                <div className="flex gap-3 justify-between border p-1 bg-gray-100 rounded-md">
                                    <label onClick={() => setProductDetails(product)} htmlFor="product-details-modal" className="bg-[#2CBBD5] px-2 py-1 rounded-md text-white text-xs sm:text-base cursor-pointer">See Details</label>
                                    <label onClick={() => setProductDetails(product)} htmlFor="booking-modal" className="bg-[#F45510] px-2 py-1 rounded-md text-white text-xs sm:text-base cursor-pointer">Book Now</label>
                                    <label onClick={() => setProductDetails(product)} htmlFor="reporting-modal" className="bg-[#2CBBD5] px-2 py-1 rounded-md text-white text-xs sm:text-base cursor-pointer">Add to Report</label>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            {/* Product detalis modal section */}
            <ProductDetailsModal
                productDetails={productDetails}
            ></ProductDetailsModal>

            {/* Booking modal section */}
            {closeBookingModal &&
                <BookingModal
                    productDetails={productDetails}
                    handleBooking={handleBooking}
                    setCloseBookingModal={setCloseBookingModal}
                ></BookingModal>}

            {/* retprting modal section */}
            {closeBookingModal &&
                <ReportingModal
                    productDetails={productDetails}
                    handleReporting={handleReporting}
                    setCloseBookingModal={setCloseBookingModal}
                ></ReportingModal>}
        </div>
    );
};

export default ProductCategory;