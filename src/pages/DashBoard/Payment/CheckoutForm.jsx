import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            console.log(error);
            setCardError(error.message)
        }
        else {
            setCardError('')
            console.log(paymentMethod)
        }
    }
    return (
        <div className='w-full h-full px-10 ms-10 mt-2'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {
                    cardError && <p className='text-red-600 text-center mt-10'>{cardError}</p>
                }
                <div className='text-center'>
                    <button type="submit" className='btn w-1/2 btn-outline border-1 border-b-4 mt-4' disabled={!stripe}>
                        Pay
                    </button>
                </div>
            </form>

        </div>
    );
};

export default CheckoutForm;