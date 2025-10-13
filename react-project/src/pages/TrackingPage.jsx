import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useParams } from 'react-router';
import './trackingPage.css';
import axios from 'axios';
import dayjs from 'dayjs';

const TrackingPage = () => {
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`
      );
      setOrder(response.data);
    };
    fetchData();
  }, [orderId]);

  if (!order) {
    return null;
  }

  const orderProduct = order.products.find((orderProduct) => {
    return orderProduct.productId === productId;
  });

  const totalDeliveryTimeMs =
    orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
  const timePassedMs = dayjs().valueOf() - order.orderTimeMs;

  let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100;
  if (deliveryPercent > 100) {
    deliveryPercent = 100;
  }
  let delivered;
  let isPreparing;
  let isShipped;
  let isDelivered;
  if (deliveryPercent >= 100) {
    delivered = 'Delivered on'
  }
  if (deliveryPercent < 33 ) {
   isPreparing = 'Preparing'
   
  }

  if (deliveryPercent >= 33 && deliveryPercent < 100) {
    isShipped = 'Shipped'
  }

  if (deliveryPercent === 100) {
    isDelivered = 'Delivered'
  }

  return (
    <div>
      <link
        rel='shortcut icon'
        href='tracking-favicon.png'
        type='image/x-icon'
      />
      <title>Tracking</title>

      <div className='header'>
        <div className='left-section'>
          <Link to='/' className='header-link'>
            <img className='logo' src='images/logo-white.png' />
            <img className='mobile-logo' src='images/mobile-logo-white.png' />
          </Link>
        </div>

        <div className='middle-section'>
          <input className='search-bar' type='text' placeholder='Search' />

          <button className='search-button'>
            <img className='search-icon' src='images/icons/search-icon.png' />
          </button>
        </div>

        <div className='right-section'>
          <Link className='orders-link header-link' to='/orders'>
            <span className='orders-text'>{}</span>
          </Link>

          <Link className='cart-link header-link' to='/checkout'>
            <img className='cart-icon' src='images/icons/cart-icon.png' />
            <div className='cart-quantity'>{orderProduct.quantity} </div>
            <div className='cart-text'>Cart</div>
          </Link>
        </div>
      </div>

      <div className='tracking-page'>
        <div className='order-tracking'>
          <Link className='back-to-orders-link link-primary' to='/orders'>
            View all orders
          </Link>

          <div className='delivery-date'>
            {delivered}{' '}
            {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
          </div>

          <div className='product-info'>{orderProduct.product.name}</div>

          <div className='product-info'>Quantity: {orderProduct.quantity}</div>

          <img className='product-image' src={orderProduct.product.image} />

          <div className='progress-labels-container'>
            <div className={`progress-label ${isPreparing && 'current-statue'}`}>
              Preparing
            </div>
            <div className={`progress-label ${isShipped && 'current-statue'}`}>
              Shipped
            </div>
            <div className={`progress-labe ${isDelivered && 'current-statue'}`}>
              Delivered
            </div>
          </div>

          <div className='progress-bar-container'>
            <div
              className='progress-bar'
              style={{
                width: `${deliveryPercent}%`,
              }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;
