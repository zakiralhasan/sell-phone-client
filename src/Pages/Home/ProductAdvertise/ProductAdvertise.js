import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import BookingModal from '../../../Components/BookingModal/BookingModal';
import ProductDetailsModal from '../../../Components/ProductDetailsModal/ProductDetailsModal';
import ReportingModal from '../../../Components/ReportingModal/ReportingModal';
import ProductCard from './ProductCard';

const ProductAdvertise = () => {
    const [closeBookingModal, setCloseBookingModal] = useState(true)
    const [productDetails, setProductDetails] = useState('')
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    //store booking data to the server
    const handleBooking = bokingInfo => {
        axios.post(`${process.env.REACT_APP_API_URL}/bookings`, bokingInfo)
            .then(bookingData => {
                console.log(bookingData)
                if (bookingData.data.acknowledged) {
                    toast.success('Your booking successfull!')
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
        <div>
            <div className='mt-12'>
                {products &&
                    <div className='w-11/12 mx-auto my-5'>

                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
                            {
                                products?.map(product => <ProductCard
                                    key={product._id}
                                    product={product}
                                    setProductDetails={setProductDetails}
                                ></ProductCard>)
                            }
                        </div>
                    </div>
                }
            </div>
            {/* Product detalis modal section */}
            <ProductDetailsModal productDetails={productDetails}></ProductDetailsModal>

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

export default ProductAdvertise;