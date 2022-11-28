import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK); //used for stripe
const Payment = () => {
    const booking = useLoaderData();
    const { productName, productPrice } = booking;

    return (
        <div className='text-left p-8'>
            <h1 className='text-2xl'>Payment for {productName}</h1>
            <p>Please pay <span className='font-bold'>${productPrice}</span> for your purchase.</p>
            <div className='bg-white max-w-sm p-4 mt-5 border rounded-md '>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;