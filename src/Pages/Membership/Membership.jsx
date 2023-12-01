/* eslint-disable no-unused-vars */
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);
const Membership = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-center my-8'>Membership</h2>
            <h2 className='text-2xl font-semibold my-8'>Spend 300$ to become premium member.</h2>
            <div>
                <Elements stripe={stripePromise} >
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Membership;