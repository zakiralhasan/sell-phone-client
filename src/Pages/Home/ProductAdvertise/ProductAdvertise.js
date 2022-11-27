import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import BookingModal from '../../../Components/BookingModal/BookingModal';
import ProductDetailsModal from '../../../Components/ProductDetailsModal/ProductDetailsModal';
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

    return (
        <div>
            <div>
                {products &&
                    <div className='w-11/12 mx-auto my-5'>
                        <h1 className='my-8'>Advertise section</h1>
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
            <ProductDetailsModal productDetails={productDetails}></ProductDetailsModal>
            {closeBookingModal &&
                <BookingModal
                    productDetails={productDetails}
                    handleBooking={handleBooking}
                    setCloseBookingModal={setCloseBookingModal}
                ></BookingModal>}
        </div>
    );
};

export default ProductAdvertise;