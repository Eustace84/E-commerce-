import React, { useState } from 'react';
import './checkoutHeader.css';
import './CheckoutPage.css';
import CheckoutHeader from './CheckoutHeader';
import axios from 'axios';
import { useEffect } from 'react';
import PaymentSummary from '../PaymentSummary';

import OrderSummary from './OrderSummary';

const CheckoutPage = ({ cart }) => {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState('');

  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await axios.get(
        '/api/delivery-options?expand=estimatedDeliveryTime'
      );
      setDeliveryOptions(response.data);

      response = await axios.get('/api/payment-summary');
      setPaymentSummary(response.data);
    };
    fetchCheckoutData();
  }, []);

  return (
    <div>
      <link rel='shortcut icon' href='cart-favicon.png' type='image/x-icon' />
      <title>Checkout</title>

      <CheckoutHeader />
      <div className='checkout-page'>
        <div className='page-title'>Review your order</div>

        <div className='checkout-grid'>
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />

          <div className='payment-summary'>
            <div className='payment-summary-title'>Payment Summary</div>

            <PaymentSummary paymentSummary={paymentSummary} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
